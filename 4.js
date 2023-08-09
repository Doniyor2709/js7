function reverseString(string) {
  if (string === "") {
    return "";
  }


  const reversedCharacters = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedCharacters.push(string[i]);
  }


  return reversedCharacters.join("");
}

// Example usage
const string = "Doniyor";
const reversedString = reverseString(string);
console.log(reversedString);