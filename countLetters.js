const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion failed: " + actual + " !== " + expected);
  }
};



const countLetters = function (string) {
  let obj = {};
  let letters = string.split("");
  console.log(letters);
  letters.forEach(function(letter){
    if (obj[letter]) {
      obj[letter] += 1
    }
    else {
      obj[letter] = 1
    }
  })
  console.log(obj)
  return obj
}

const example =  countLetters("Chicken Nuggets");