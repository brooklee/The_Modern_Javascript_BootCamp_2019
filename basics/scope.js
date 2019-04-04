//Lexical Scope (Static Scope)
//Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a Code Block

//in a Scope you can access variables defined in that scope, or in any parent/ncestor scope

// Global Scope (varOne)
////Local Scope (varTwo)
//////Local Scope (varFour)
////Local Scope (varThree)

let varOne = "VarOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varTwo);

  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}
console.log(varTwo); //Get an error
