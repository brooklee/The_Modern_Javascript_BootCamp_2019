//Global scope (convert, temp)
////local scope (celsius)

let convert = function(fahr) {
  let celsius = (fahr - 32) / (9 / 5);

  if (celsius <= 0) {
    let isFreezing = true;
  }
  return celsius;
};

let temp = convert(68);

console.log(temp);
