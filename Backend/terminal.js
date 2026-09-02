// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\HP\\OneDrive\\Desktop\\MERN\\Backend\\script.js'
// ]
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js hemanth lakshmi lokesh
// hello C:\Program Files\nodejs\node.exe
// hello C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js
// hello hemanth
// hello lakshmi
// hello lokesh
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js hemanth lakshmi lokesh
// hello hemanth
// hello lakshmi
// hello lokesh
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js hemanth
// 32
// 51
// 7
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js Hemanth
// 7
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js Lokesh Lakshmi
// 6
// 7
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// Hello 123 mike testing
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// {}
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// {}
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// {
//   sum: [Function: sum],
//   sub: [Function: sub],
//   mul: [Function: mul],
//   div: [Function: div]
// }
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// {
//   sum: [Function: sum],
//   sub: [Function: sub],
//   mul: [Function: mul],
//   div: [Function: div]
// }
// C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:27
//     case sum:
//          ^

// ReferenceError: sum is not defined
//     at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:27:10)
//     at Module._compile (node:internal/modules/cjs/loader:1760:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1480:32)
//     at Module._load (node:internal/modules/cjs/loader:1299:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js sum
// {
//   sum: [Function: sum],
//   sub: [Function: sub],
//   mul: [Function: mul],
//   div: [Function: div]
// }
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js sum
// {
//   sum: [Function: sum],
//   sub: [Function: sub],
//   mul: [Function: mul],
//   div: [Function: div]
// }
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js sum
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js sum
// 6
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js sum(5,5)
// C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:27
//         obj.sum(a,b);
//                 ^

// ReferenceError: a is not defined
//     at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:27:17)
//     at Module._compile (node:internal/modules/cjs/loader:1760:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1480:32)
//     at Module._load (node:internal/modules/cjs/loader:1299:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js sum(5,5)
// C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:24
// switch(arg[2](a,b))
//               ^

// ReferenceError: a is not defined
//     at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:24:15)
//     at Module._compile (node:internal/modules/cjs/loader:1760:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1480:32)
//     at Module._load (node:internal/modules/cjs/loader:1299:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js sum 5 5
// C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:24
// switch(arg[2](a,b))
//               ^

// ReferenceError: a is not defined
//     at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:24:15)
//     at Module._compile (node:internal/modules/cjs/loader:1760:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1480:32)
//     at Module._load (node:internal/modules/cjs/loader:1299:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js sum 5 5
// C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:27
//         obj.sum(a,b);
//                 ^

// ReferenceError: a is not defined
//     at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:27:17)
//     at Module._compile (node:internal/modules/cjs/loader:1760:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1480:32)
//     at Module._load (node:internal/modules/cjs/loader:1299:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js sum 5 5
// 55
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend>
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js sum 5 5
// 10
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js mul 5 5
// 25
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js sub 5 5
// 0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js div 5 5
// 1
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// {
//   sum: [Function: sum],
//   sub: [Function: sub],
//   mul: [Function: mul],
//   div: [Function: div],
//   PI: 3.14,
//   g: 8.41648565
// }
// {
//   sum: [Function: sum],
//   sub: [Function: sub],
//   mul: [Function: mul],
//   div: [Function: div],
//   PI: 3.14,
//   g: 8.41648565
// }
// invalid
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// {
//   sum: [Function: sum],
//   sub: [Function: sub],
//   mul: [Function: mul],
//   div: [Function: div],
//   PI: 3.14,
//   g: 8.41648565
// }
// {
//   sum: [Function: sum],
//   sub: [Function: sub],
//   mul: [Function: mul],
//   div: [Function: div],
//   PI: 3.14,
//   g: 8.41648565
// }
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// { PI: 3.14, g: 8.41648565 }
// { PI: 3.14, g: 8.41648565 }
// invalid
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// { PI: 3.14, g: 8.41648565 }
// C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:25
// console.log(gval);
//             ^

// ReferenceError: gval is not defined
//     at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:25:13)
//     at Module._compile (node:internal/modules/cjs/loader:1760:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1480:32)
//     at Module._load (node:internal/modules/cjs/loader:1299:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// { PI: 3.14, g: 8.41648565 }
// { PI: 3.14, g: 8.41648565 }
// invalid
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// { PI: 3.14, g: 8.41648565 }
// invalid
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// { PI: 3.14, g: 8.41648565 }
// invalid
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend>
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// { PI: 3.14, g: 8.41648565 }
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// [
//   { name: 'apple', color: 'red' },
//   { name: 'banana', color: 'yellow' },
//   { name: 'mango', color: 'yellow' }
// ]
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// undefined
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// undefined
// undefined
// undefined
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// apple
// banana
// mango
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:51
// console.log(printfruits[i].color;
//                            ^^^^^

// SyntaxError: missing ) after argument list
//     at wrapSafe (node:internal/modules/cjs/loader:1691:18)
//     at Module._compile (node:internal/modules/cjs/loader:1734:20)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1480:32)
//     at Module._load (node:internal/modules/cjs/loader:1299:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// C:\Users\HP\OneDrive\Desktop\MERN\Backend\script.js:51
// console.log(printfruits[i].color;
//                            ^^^^^

// SyntaxError: missing ) after argument list
//     at wrapSafe (node:internal/modules/cjs/loader:1691:18)
//     at Module._compile (node:internal/modules/cjs/loader:1734:20)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1480:32)
//     at Module._load (node:internal/modules/cjs/loader:1299:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node script.js
// apple
// red
// banana
// yellow
// mango
// yellow
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> mkdir FigletDemo


//     Directory: C:\Users\HP\OneDrive\Desktop\MERN\Backend


// Mode                 LastWriteTime         Length Name
// ----                 -------------         ------ ----
// d-----        02-09-2026  03:23 PM                FigletDemo


// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> cd FigletDemo
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> npm i figlet

// added 2 packages in 9s
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> node index.js
// node:internal/modules/cjs/loader:1423
//   throw err;
//   ^

// Error: Cannot find module 'FigletDemo'
// Require stack:
// - C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo\index.js
//     at Module._resolveFilename (node:internal/modules/cjs/loader:1420:15)
//     at defaultResolveImpl (node:internal/modules/cjs/loader:1058:19)
//     at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1063:22)
//     at Module._load (node:internal/modules/cjs/loader:1226:37)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.require (node:internal/modules/cjs/loader:1503:12)
//     at require (node:internal/modules/helpers:152:16)
//     at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo\index.js:1:12)
//     at Module._compile (node:internal/modules/cjs/loader:1760:14) {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: [
//     'C:\\Users\\HP\\OneDrive\\Desktop\\MERN\\Backend\\FigletDemo\\index.js'
//   ]
// }

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> node index.js
// node:internal/modules/cjs/loader:1423
//   throw err;
//   ^

// Error: Cannot find module 'FigletDemo'
// Require stack:
// - C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo\index.js
//     at Module._resolveFilename (node:internal/modules/cjs/loader:1420:15)
//     at defaultResolveImpl (node:internal/modules/cjs/loader:1058:19)
//     at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1063:22)
//     at Module._load (node:internal/modules/cjs/loader:1226:37)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.require (node:internal/modules/cjs/loader:1503:12)
//     at require (node:internal/modules/helpers:152:16)
//     at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo\index.js:1:12)
//     at Module._compile (node:internal/modules/cjs/loader:1760:14) {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: [
//     'C:\\Users\\HP\\OneDrive\\Desktop\\MERN\\Backend\\FigletDemo\\index.js'
//   ]
// }

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> ls


//     Directory: C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo


// Mode                 LastWriteTime         Length Name
// ----                 -------------         ------ ----
// dar--l        02-09-2026  03:23 PM                node_modules
// -a---l        02-09-2026  03:47 PM            208 index.js
// -a---l        02-09-2026  03:23 PM            963 package-lock.json
// -a---l        02-09-2026  03:23 PM             52 package.json


// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> node  index.js
// node:internal/modules/cjs/loader:1423
//   throw err;
//   ^

// Error: Cannot find module 'FigletDemo'
// Require stack:
// - C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo\index.js
//     at Module._resolveFilename (node:internal/modules/cjs/loader:1420:15)
//     at defaultResolveImpl (node:internal/modules/cjs/loader:1058:19)
//     at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1063:22)
//     at Module._load (node:internal/modules/cjs/loader:1226:37)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.require (node:internal/modules/cjs/loader:1503:12)
//     at require (node:internal/modules/helpers:152:16)
//     at Object.<anonymous> (C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo\index.js:1:12)
//     at Module._compile (node:internal/modules/cjs/loader:1760:14) {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: [
//     'C:\\Users\\HP\\OneDrive\\Desktop\\MERN\\Backend\\FigletDemo\\index.js'
//   ]
// }

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> node index.js
//   _   _      _ _        __        __         _     _ _ _
//  | | | | ___| | | ___   \ \      / /__  _ __| | __| | | |
//  | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | | |
//  |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|_|
//  |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_|_)

// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> node index.js
//   _   _                            _   _       _
//  | | | | ___ _ __ ___   __ _ _ __ | |_| |__   | |
//  | |_| |/ _ \ '_ ` _ \ / _` | '_ \| __| '_ \  | |
//  |  _  |  __/ | | | | | (_| | | | | |_| | | | | |___
//  |_| |_|\___|_| |_| |_|\__,_|_| |_|\__|_| |_| |_____|

// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> node index.js
//   _          _        _               _
//  | |    __ _| | _____| |__  _ __ ___ (_)
//  | |   / _` | |/ / __| '_ \| '_ ` _ \| |
//  | |__| (_| |   <\__ \ | | | | | | | | |
//  |_____\__,_|_|\_\___/_| |_|_| |_| |_|_|

// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> node index.js
//   _          _             _
//  | |    ___ | | _____  ___| |__
//  | |   / _ \| |/ / _ \/ __| '_ \
//  | |__| (_) |   <  __/\__ \ | | |
//  |_____\___/|_|\_\___||___/_| |_|

// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> node index.js
//        _     _ _
//    ___| |__ (_) | ____ _ _ __ ___  _ __ ___   __ _
//   / __| '_ \| | |/ / _` | '_ ` _ \| '_ ` _ \ / _` |
//  | (__| | | | |   < (_| | | | | | | | | | | | (_| |
//   \___|_| |_|_|_|\_\__,_|_| |_| |_|_| |_| |_|\__,_|

// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> node index.js
//   _   _                     _
//  | \ | | __ _ _ __ __ _ ___(_)_   _  __ _ _ __  _ __   __ _
//  |  \| |/ _` | '__/ _` / __| | | | |/ _` | '_ \| '_ \ / _` |
//  | |\  | (_| | | | (_| \__ \ | |_| | (_| | |_) | |_) | (_| |
//  |_| \_|\__,_|_|  \__,_|___/_|\__, |\__,_| .__/| .__/ \__,_|
//                               |___/      |_|   |_|
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> npm install

// added 2 packages, and audited 3 packages in 8s

// found 0 vulnerabilities
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> node index.js
//   _   _                     _
//  | \ | | __ _ _ __ __ _ ___(_)_   _  __ _ _ __  _ __   __ _
//  |  \| |/ _` | '__/ _` / __| | | | |/ _` | '_ \| '_ \ / _` |
//  | |\  | (_| | | | (_| \__ \ | |_| | (_| | |_) | |_) | (_| |
//  |_| \_|\__,_|_|  \__,_|___/_|\__, |\__,_| .__/| .__/ \__,_|
//                               |___/      |_|   |_|
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\FigletDemo> cd /..
// PS C:\> cd Users/HP/OneDrive
// PS C:\Users\HP\OneDrive> cd Desktop/MERN/Backend
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> pwd

// Path
// ----
// C:\Users\HP\OneDrive\Desktop\MERN\Backend


// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> mkdir Myproject


//     Directory: C:\Users\HP\OneDrive\Desktop\MERN\Backend


// Mode                 LastWriteTime         Length Name
// ----                 -------------         ------ ----
// d-----        02-09-2026  04:20 PM                Myproject


// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (backend)
// version: (1.0.0)
// description: "This is my project"
// entry point: (math.js) script.js
// test command:
// git repository:
// keywords:
// author: Hemanth L
// license: (ISC)
// type: (commonjs)
// About to write to C:\Users\HP\OneDrive\Desktop\MERN\Backend\package.json:

// {
//   "name": "backend",
//   "version": "1.0.0",
//   "description": "\"This is my project\"",
//   "main": "script.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "Hemanth L",
//   "license": "ISC",
//   "type": "commonjs"
// }


// Is this OK? (yes) yes

// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> cd MyProject
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\MyProject> npm install figlet

// added 2 packages, and audited 3 packages in 8s

// found 0 vulnerabilities
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend\MyProject> cd /..
// PS C:\> cd Users/HP/OneDrive/Desktop/MERN
// PS C:\Users\HP\OneDrive\Desktop\MERN> cd Bakend
// cd : Cannot find path 'C:\Users\HP\OneDrive\Desktop\MERN\Bakend' because it does not exist.
// At line:1 char:1
// + cd Bakend
// + ~~~~~~~~~
//     + CategoryInfo          : ObjectNotFound: (C:\Users\HP\OneDrive\Desktop\MERN\Bakend:String) [Set-Location], ItemNotFoundException
//     + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.SetLocationCommand

// PS C:\Users\HP\OneDrive\Desktop\MERN> cd Backend
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node app.js
// file:///C:/Users/HP/OneDrive/Desktop/MERN/Backend/math.js:17
// exports.PI=3.14;
// ^

// ReferenceError: exports is not defined in ES module scope
// This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\HP\OneDrive\Desktop\MERN\Backend\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//     at file:///C:/Users/HP/OneDrive/Desktop/MERN/Backend/math.js:17:1
//     at ModuleJob.run (node:internal/modules/esm/module_job:377:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:691:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node app.js
// file:///C:/Users/HP/OneDrive/Desktop/MERN/Backend/math.js:17
// exports.PI=3.14;
// ^

// ReferenceError: exports is not defined in ES module scope
// This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\HP\OneDrive\Desktop\MERN\Backend\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//     at file:///C:/Users/HP/OneDrive/Desktop/MERN/Backend/math.js:17:1
//     at ModuleJob.run (node:internal/modules/esm/module_job:377:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:691:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

// Node.js v24.11.0
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node app.js
// 10
// undefined
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node app.js
// 10
// undefined
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend> node app.js
// 10
// undefined
// 0
// undefined
// 25
// undefined
// PS C:\Users\HP\OneDrive\Desktop\MERN\Backend>
