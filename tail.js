const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion failed: " + actual + " !== " + expected);
  }
};

const tail = function(array) {
  return array.slice[1];
};
module.exports = tail;

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);