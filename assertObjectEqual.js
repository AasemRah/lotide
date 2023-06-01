const assertObjectsEqual = function(actual, expected) {
  // Implement me!

  let ans = eqObjects(actual, expected)
  if (ans === false) {
   actual != expected
  }
  else{
    actual = expected
  }
  assertEqual(actual, expected)
  
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion failed: " + actual + " !== " + expected);
  }
};

if (objk1.length !== objk2.length) {
  return false;
}
for (let key of objk1) { // for array use let of $ for objects use in.
  if(!objk2.includes(key)){
    return false;
  }
  else {
    if (object1[key] !== object2[key]){
      return false;
    }

  }
 

}
return true  