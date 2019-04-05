// Function - input (Argument), code, output (return Value)

let greetUser = function() {
  console.log("Welcome User");
};

greetUser();

let square = function(num) {
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// Challenge Area

let convert = function(fahr) {
  let celsius = (fahr - 32) / (9 / 5);
  return celsius;
};

let temp = convert(68);

console.log(temp);
