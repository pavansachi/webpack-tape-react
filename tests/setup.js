import jsdom from 'jsdom';
// const intercept = require("intercept-require");

function setupDom() {
  if (typeof document === 'undefined') {
    const { JSDOM } = jsdom;
    const { document } = (new JSDOM('<html><body></body></html>')).window;
    global.document = document;
    global.window = document.defaultView;
    global.navigator = window.navigator;
  }
}

// const restore = intercept(function (moduleExport, info) {
//   // moduleExport is whatever the actual module exported
 
//   // info looks like:
//   //  {
//   //    moduleId: "lodash",
//   //    callingFile: "index.js",
//   //    native: false,
//   //    extname: ".js",
//   //    thirdParty: true,
//   //    exports: [[actual lodash object]]
//   //    absPath: /from/root/to/project/node_modules/lodash/lodash.js,
//   //    absPathResolvedCorrectly: true,
//   //    testOnly: false,
//   //    local: false
//   //  }
//   console.log("require:", info.moduleId, "from", info.callingFile);
  
//   // value returned from this function will be passed back to the caller as if it was module.exports
//   return moduleExport;
// }, {shortCircuit: true});

// console.log(restore);

setupDom();
// restore();
