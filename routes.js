let logic = require("./logic");

function coinFlipRoute(request, response) {
  let flip = logic.flipCoin();

  if (flip) {
    response.send("Heads");
  } else {
    response.send("Tails");
  }
}

function addNumbersRoute(request, response) {
  let number1 = request.params.number1;
  let number2 = request.params.number2;
  response.send(logic.addNumbers(number1, number2));
}

module.exports.coinFlipRoute = coinFlipRoute;
module.exports.addNumbersRoute = addNumbersRoute;