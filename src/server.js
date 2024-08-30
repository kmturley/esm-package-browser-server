// This file contains JavaScript which can only run on the server.

export * from './shared.js';

export function server(message) {
  console.log(process.env.SHELL);
  return 'Server says ' + message;
}
