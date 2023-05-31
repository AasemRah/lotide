
const eqArrays = function (arr1, arr2){
  for(let x = 0; x < arr1.length; x++) {
    if(arr1[x] !== arr2[x])
    return false;
  }
  return true;
}

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

// TEST CODE
assertArrayEqual(middle([4, 5, 6]), [5]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2]), []);