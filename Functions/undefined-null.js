//Undefined for var

let name;

name = "Jen";

if (name === undefined) {
  console.log("Please Provide a name");
} else {
  console.log(name);
}

//Undefined for Functions Arguments
//Undefined as function return  default value
let square = function(num) {
  console.log(num);
};

let result = square();
console.log(result);

let age = 27;
// Null as assigned Value
age = null;

console.log(age);
