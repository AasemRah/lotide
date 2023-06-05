const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
  });
});

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); 
//assertEqual(words.length, 3);