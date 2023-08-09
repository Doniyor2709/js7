function countNumbersInString(string) {

  let numberOfNumbers = 0;


  for (const character of string) {

    if (!isNaN(character)) {

      numberOfNumbers++;
    }
  }

  return numberOfNumbers;
}


const string = "123abc456def789ghi";
const numberOfNumbers = countNumbersInString(string);
console.log(numberOfNumbers);