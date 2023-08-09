function string(s1, s2) {
  let indexOfFirstOccurrence = s1.indexOf(s2);

  if (indexOfFirstOccurrence === -1) {
    return s1;
  }

  const newString = s1.slice(0, indexOfFirstOccurrence) + s1.slice(indexOfFirstOccurrence + s2.length);

  return newString;
}

const s1 = "Hello, world! Hello, world! Hello, world!";
const s2 = "Hello, world!";
const newString = string(s1, s2);
console.log(newString);