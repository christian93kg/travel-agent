// Shared settings for the browser-driven tools. Override with environment variables.
//   TA_GL        Google country code for Flights (default "us"). Affects which fares and sellers you see.
//   TA_CURRENCY  ISO currency code (default "USD").
//   TZ           IANA timezone for the headless browser (default: this machine's timezone).
// The page language stays English (hl=en): the parsers read English labels ("Nonstop", "results returned").
const timezoneId = process.env.TZ || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
module.exports = {
  gl: process.env.TA_GL || 'us',
  currency: process.env.TA_CURRENCY || 'USD',
  hl: 'en',
  locale: 'en-US',
  timezoneId,
};
