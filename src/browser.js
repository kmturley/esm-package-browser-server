// This file contains JavaScript which can only run in the browser.

export * from './shared.js';

export function browser(message) {
  console.log(window.location.href);
  return 'Browser says ' + message;
}
