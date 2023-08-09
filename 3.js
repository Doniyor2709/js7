function string(n, character) {
  if (n <= 0) {
    console.log("n must be a positive integer");
    return;
  }


  const string = character.repeat(n);


  console.log(string);
}


const n = 5;
const character = 'A';
string(n, character);