// Multiple Arguments
let add = function(a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

//Default Arguments
let getScoreText = function(name = "Anonymus", score = 0) {
  return "Name: " + name + " Score: " + score;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge
let tipPercent = function(total, tip = 0.2) {
  return total * tip;
};

let tipPercentage = tipPercent(100);
console.log(tipPercentage);
