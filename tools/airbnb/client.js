// Minimal MCP (JSON-RPC over stdio) client for @openbnb/mcp-server-airbnb.
//
// By default the server runs inside the Landlock sandbox (airbnb/sandbox.sh), which also
// passes --ignore-robots-txt unless BNB_RESPECT_ROBOTS=1.
// BNB_NO_SANDBOX=1 runs the server directly with node instead. Unsandboxed, the client never adds
// --ignore-robots-txt, so Airbnb's robots.txt is respected (requests are refused).
//
// Library:
//   const { connect } = require('./client');
//   const c = await connect({ args: [] });                 // extra server args
//   const res = await c.call('airbnb_search', { location: 'Lisbon, Portugal', checkin, checkout, adults: 2 });
//   c.close();
// call() resolves to the parsed JSON of result.content[0].text and throws on any error.
//
// CLI:
//   node airbnb/client.js tools                                  list the server's tools and their arguments
//   node airbnb/client.js '<airbnb_search args json>'            print the raw search result
//   node airbnb/client.js airbnb_listing_details '<args json>'   any tool by name
// MAXC=<chars> caps the printed output (default 4000; 0 = no cap).
const { spawn } = require('child_process');
const path = require('path');

const SANDBOX = path.join(__dirname, 'sandbox.sh');
const SERVER = path.join(__dirname, '..', 'node_modules', '@openbnb', 'mcp-server-airbnb', 'dist', 'index.js');
const STDERR_KEEP = 4000;

function isRobotsRefusal(text) {
  return /robots\.txt/i.test(text || '') && /disallow/i.test(text || '');
}

async function connect({ sandbox = process.env.BNB_NO_SANDBOX !== '1', args = [] } = {}) {
  const respectRobots = !sandbox || process.env.BNB_RESPECT_ROBOTS === '1';
  let proc;
  if (sandbox) {
    proc = spawn(SANDBOX, args, { stdio: ['pipe', 'pipe', 'pipe'] });
  } else {
    const env = { ...process.env };
    delete env.IGNORE_ROBOTS_TXT; // the server would read this as an override
    proc = spawn(process.execPath, [SERVER, ...args], { stdio: ['pipe', 'pipe', 'pipe'], env });
  }

  let buf = '', nextId = 0, stderrTail = '', exited = null;
  const pending = new Map();
  const tail = () => stderrTail.trim().split('\n').slice(-8).join('\n');

  proc.stdout.setEncoding('utf8');
  proc.stdout.on('data', chunk => {
    buf += chunk;
    let i;
    while ((i = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, i).trim();
      buf = buf.slice(i + 1);
      if (!line) continue;
      let msg;
      try { msg = JSON.parse(line); } catch { continue; }
      const p = msg.id != null && pending.get(msg.id);
      if (p) { pending.delete(msg.id); clearTimeout(p.timer); p.resolve(msg); }
    }
  });
  proc.stderr.setEncoding('utf8');
  proc.stderr.on('data', d => { stderrTail = (stderrTail + d).slice(-STDERR_KEEP); });
  const failAll = err => { for (const [, p] of pending) { clearTimeout(p.timer); p.reject(err); } pending.clear(); };
  proc.on('error', e => { exited = e; failAll(new Error(`cannot start the Airbnb MCP server: ${e.message}`)); });
  proc.on('exit', (code, sig) => {
    exited = { code, sig };
    failAll(new Error(`Airbnb MCP server exited (${sig || code}).${tail() ? '\nserver stderr:\n' + tail() : ''}`));
  });
  proc.stdin.on('error', () => {}); // reported through the exit handler

  const rpc = (method, params, timeoutMs) => new Promise((resolve, reject) => {
    if (exited) return reject(new Error(`Airbnb MCP server is not running.${tail() ? '\nserver stderr:\n' + tail() : ''}`));
    const id = ++nextId;
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`${method} timed out after ${timeoutMs} ms`)); }, timeoutMs);
    pending.set(id, { resolve, reject, timer });
    proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
  });
  const notify = (method, params) => proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', method, params }) + '\n');

  try {
    const init = await rpc('initialize', { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'travel-agent', version: '1.0' } }, 30000);
    if (init.error) throw new Error(`initialize failed: ${init.error.message || JSON.stringify(init.error)}`);
  } catch (e) {
    if (!exited) proc.kill('SIGTERM');
    throw e;
  }
  notify('notifications/initialized', {});

  async function call(tool, toolArgs = {}, timeoutMs = 70000) {
    const a = { ...toolArgs };
    if (respectRobots) delete a.ignoreRobotsText; // no per-request override when robots.txt is respected
    const msg = await rpc('tools/call', { name: tool, arguments: a }, timeoutMs);
    if (msg.error) throw new Error(`${tool}: ${msg.error.message || JSON.stringify(msg.error)}`);
    const text = msg.result?.content?.[0]?.text ?? '';
    let data;
    try { data = JSON.parse(text); } catch { data = null; }
    const errText = data?.error || (msg.result?.isError ? text : '');
    if (errText) {
      if (isRobotsRefusal(String(errText))) {
        throw new Error(`${tool}: refused by Airbnb's robots.txt. The server is respecting robots.txt ` +
          `(BNB_RESPECT_ROBOTS=1 or BNB_NO_SANDBOX=1). The override is only applied inside the sandbox.`);
      }
      throw new Error(`${tool}: ${String(errText).slice(0, 300)}`);
    }
    if (data == null) throw new Error(`${tool}: response was not JSON: ${text.slice(0, 200)}`);
    return data;
  }

  const listTools = async () => {
    const msg = await rpc('tools/list', {}, 30000);
    if (msg.error) throw new Error(`tools/list: ${msg.error.message}`);
    return msg.result.tools;
  };

  function close() {
    if (exited) return;
    proc.stdin.end();
    proc.kill('SIGTERM');
  }

  return { call, listTools, close, proc };
}

module.exports = { connect };

if (require.main === module) {
  const argv = process.argv.slice(2);
  if (!argv.length) {
    console.error("usage: node airbnb/client.js tools | '<airbnb_search args json>' | <tool> '<args json>'");
    process.exit(2);
  }
  (async () => {
    const c = await connect();
    try {
      if (argv[0] === 'tools') {
        const tools = await c.listTools();
        console.log(JSON.stringify(tools.map(t => ({ name: t.name, args: Object.keys(t.inputSchema?.properties || {}) })), null, 1));
        return;
      }
      const [tool, json] = argv.length > 1 ? argv : ['airbnb_search', argv[0]];
      const res = await c.call(tool, JSON.parse(json));
      const out = JSON.stringify(res);
      const max = process.env.MAXC == null ? 4000 : +process.env.MAXC;
      console.log(max > 0 ? out.slice(0, max) : out);
    } finally { c.close(); }
  })().catch(e => { console.error(e.message); process.exit(1); });
}
