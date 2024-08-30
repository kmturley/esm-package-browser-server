# esm-package-browser-server

Example ESM package which exports both browser and server modules and isomorphic JavaScript code which can run in browser and/or server.

## Usage

Browser `example-browser.js` JavaScript file:

    import { shared, browser } from "esm-package-browser-server";
    console.log(shared('Example'));
    console.log(browser('Example'));

And html file:

    <html>
      <script type="importmap">
        {
          "imports": {
            "esm-package-browser-server": "./node_modules/esm-package-browser-server/src/browser.js"
          }
        }
      </script>
      <script type="module" src="example-browser.js"></script>
    </html>

Server `example-server.js` JavaScript file:

    import { shared, server } from "esm-package-browser-server";
    console.log(shared('Example'));
    console.log(server('Example'));

And run command:

    node example-server.js

Shared function should be able to be run both browser/server, but the the other code not accessible unless on correct platform.

## How it works

Using [conditional exports](https://nodejs.org/api/packages.html#packages_conditional_exports):

    "exports": {
      "node": "./src/server.js",
      "default": "./src/browser.js"
    },

Node process will use `./src/server.js` others will fallback/map to `./src/browser.js`.

## Contact

For more information please contact kmturley
