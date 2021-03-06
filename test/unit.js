let chai = require("chai");
let logic = require("../logic");

suite("Test coin flip", function() {

  test("Test the coin flips properly", function() {
    // Initialise a counter.
    let counter = 0;

    for (let i=0; i<100; i++) {
      // Flip the coin.
      let flip = logic.flipCoin();

      // Test return type.
      chai.assert.isBoolean(flip, "Should be a Boolean");

      if (flip) {
        counter++;
      }
    }

    chai.assert.approximately(50, counter, 10);
  });

});


suite("Test addition function", function() {

  test("Test addition works correctly", function() {
    chai.assert.equal(17, logic.addNumbers(5, 12), "5+12 should = 17");
    chai.assert.equal(26, logic.addNumbers(17, 9), "17+9 should = 26");
  });

});