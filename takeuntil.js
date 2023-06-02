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

const takeUntil = function(array, callback) {
  let result = [];



  for (let item of array) {
    let conditionMet = callback(item);
    if (!conditionMet) {
      result.push(item);
    } else {
      break;
    }
  }

  return result;
};

const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results = takeUntil(data, x => x === ',');
console.log(results);