function string(s1, s2) {
  let numberOfRepetitions = 0;
  for (let i = 0; i < s1.length; i++) {

    const substring = s1.slice(i, i + s2.length);
    if (substring === s2) {
      numberOfRepetitions++;
    }
  }

  return numberOfRepetitions;
}

const s1 = "Hello, world! Hello, world! Hello, world!";
const s2 = "Hello, world!";
const numberOfRepetitions = string(s1, s2);
console.log(numberOfRepetitions);