function string(s1, s2, s3) {
  let Hello = s1.indexOf(s2);

  if (Hello === -1) {
    return s1;
  }

  const newString = s1.slice(0, Hello) + s3 + s1.slice(Hello + s2.length);

  return newString;
}


const s1 = "Hello, world! Hello, world! Hello, world!";
const s2 = "Hello, world!";
const s3 = "Goodbye, world!";
const newString = string(s1, s2, s3);
console.log(newString)