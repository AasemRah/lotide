const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const checkCondition = function(condition, conditionCriteria) {
  
  const conditionMet = conditionCriteria(condition);

  return conditionMet;
};


const findKey = function(object, condition) {
  let foundKey = "";

  for (let key in object) {
    let conditionToCheck = object[key];
    let checkedCondition = checkCondition(conditionToCheck, condition);

    if (checkedCondition) {
      foundKey = key;
      break;
    } else {
      continue;
    }
  }

  return foundKey;
};
