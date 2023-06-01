const assertArrayEqual = function(actual, expected) {
  let equivalentArrays = eqArrays(actual, expected);
  if (equivalentArrays === true) {
    console.log(` Assertion Passed: ${actual} === ${expected}`);
  } else if (equivalentArrays === false) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2){
  for(let x = 0; x < arr1.length; x++) {
    if(arr1[x] !== arr2[x])
    return false;
  }
  return true;
}




const letterPositions = function(sentence) {
  const results = {}; // the object to be populated and returned
  let corrected = sentence.split(""); // separating and making into array
  corrected.forEach(function(letter){ // for each of the letters in the array, make a key of it
    results[letter] = [];
  });
  for(let i = 0; i < sentence.length; i++) {
    results[sentence[i]].push(i);
  }
  delete results[" "];
  return results;
}

console.log(letterPositions('lighthouse labs'));