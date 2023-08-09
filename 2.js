function determineCharacterType(character) {
  const isDigit = character >= '0' && character <= '9';
  if (isDigit) {
    return 'digit';
  }

  const isLatinLetter = character >= 'A' && character <= 'Z' || character >= 'a' && character <= 'z';
  if (isLatinLetter) {
    return 'Latin';
  }
return 0;
}


const character = '1';
const characterType = determineCharacterType(character);
console.log(characterType);