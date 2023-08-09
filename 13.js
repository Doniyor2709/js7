function string(expression) {
  const stack = [];
  for (const character of expression) {
    if (character >= '0' && character <= '9') {
      stack.push(character - '0');
    } else if (character === '+' || character === '-') {
      const number2 = stack.pop();
      const number1 = stack.pop();

      const result = character === '+' ? number1 + number2 : number1 - number2;

      stack.push(result);
    }
  }

  const value = stack.pop();

  return value;
}

const expression = "7 + 3 - 2";
const value = string(expression);
console.log(value);