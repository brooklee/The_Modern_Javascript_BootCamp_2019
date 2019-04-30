// Multiple Arguments
let add = function(a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

//Default Arguments
let getScoreText = function(name = "Anonymus", score = 0) {
  return `Name ${name} - score: ${score}`
  // return "Name: " + name + " Score: " + score;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge
let tipPercent = function(total, tipPercent = 0.2) {
  let percent = tipPercent * 100
  let tip = total * tipPercent
  return `A ${percent}% tip on $${total} would be $${tip}`
  // return total * tip;
};

let tipPercentage = tipPercent(100);
console.log(tipPercentage);

//template strings
// let name = 'jen'
// let age = '10'
// console.log(`my name is ${name}! I am ${age} years old`);