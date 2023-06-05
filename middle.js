

const assertArrayEqual = function(actual, expected) {
  let equivalentArrays = eqArrays(actual, expected);
  if (equivalentArrays === true) {
    console.log(` Assertion Passed: ${actual} === ${expected}`);
  } else if (equivalentArrays === false) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function (array){
  if (array.length <= 2){
    return [];
  }else if (array.length % 2 == 0) {
    return [array[Math.floor((array.length-1) / 2)], array[Math.ceil((array.length-1) / 2)]]
  }else{
    return [array[((array.length-1) / 2)]]
  }

}

module.exports = middle;

// TEST CODE

