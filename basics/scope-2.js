// Global ()
//// Local
////// Local(name)
//// Local

//let name = "Brooklee";

if (true) {
  //let name = "Mike";

  if (true) {
    // name = "Jen"; // if ran becomes a leaked global var
    let name = "Jen";
    console.log(name);
  }
}

if (true) {
  console.log(name);
}
