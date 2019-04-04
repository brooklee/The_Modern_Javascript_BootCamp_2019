let temp = 70;

// Logical and Operator True if Both sides are True. False otherwise.
//Logical Or Operator - True if at least one side is true. False Oterwise

if (temp >= 60 && temp <= 90) {
  console.log("It's Nice out");
} else if (temp <= 0 || temp >= 120) {
  console.log("Do not go Outside");
} else {
  console.log("Do what you want");
}

// Challenge Area

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer Vegan");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Offer some Vegan optins");
} else {
  console.log("Offer anything on menu");
}
