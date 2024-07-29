function error(text) {
  console.error(`[E]: ${text}`);
  console.warn(`[W]: Test failed`);
  process.exit(1);
}

function print(text, index="=") {
  console.log(`[${index}]: ${text}`);
}

print("Importing Hashwork...");
let Hashwork;
try {
  Hashwork = require("./hashwork.js");
} catch(e) {
  error(e.stack);
}

print(`========= Hashwork (v${Hashwork.VERSION}) =========\n`);
const tests = [{
  text: "Hello, World!",
  charset: "CHARSET_DEFAULT"
}, {
  text: "foobar1234",
  charset: "CHARSET_RAIN"
}, {
  text: new Date().toString(),
  charset: "CHARSET_EGGS"
}];

(async () => {

let i = 1;
for(const test of tests) {
  try {
    const hash = await Hashwork(test.text, {
      wrap: true,
      charset: Hashwork[test.charset]
    });
    print(`Case: ${test.text}`, i);
    print(`Charset: ${test.charset}`);
    console.log(hash + "\n");
    i++;
  } catch(e) {
    error(e.stack);
  }
}

print("Test passed");
process.exit(0);

})();