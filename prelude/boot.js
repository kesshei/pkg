'use strict';
const path = require('path');
const startArgs = PKG_START || {};
let entryPoint;
const args = [];
try {
  if (startArgs.main) {
    entryPoint = path.resolve(startArgs.main);
  }
  if (startArgs.args) {
    args.push(...startArgs.args);
  }
} catch (err) {}
if (process.argv[1] === 'PKG_DUMMY_ENTRYPOINT') {
  process.argv.splice(1, 1);
}
if (entryPoint) {
  if (!process.argv[1]) {
    process.argv[1] = entryPoint;
  } else {
    process.argv.push(entryPoint);
  }
}
if (args.length > 0) {
  process.argv.push(...args);
}
return { undoPatch: true };
