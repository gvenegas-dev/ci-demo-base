const sum = require('./sum');

if (sum(2, 3) !== 5) {
  throw new Error("Test failed: sum(2, 3) debería ser 5");
}

console.log("Test passed");
