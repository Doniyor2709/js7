// function deleteAllOccurrencesOfString(s1, s2) {

//   let newString = "";

//   for (let i = 0; i < s1.length; i++) {

//     if (s1.charAt(i) === s2.charAt(0)) {
//       const indexOfEndOfS2 = i + s2.length;
//       if (s1.slice(i, indexOfEndOfS2) === s2) {
//         i += s2.length - 1;
//       } else {
//         newString += s1.charAt(i);
//       }
//     } else {
//       newString += s1.charAt(i);
//     }
//   }

//   return newString;
// }


// const s1 = "Hello, world! Hello, world! Hello, world!";
// const s2 = "Hello, world!";
// const newString = deleteAllOccurrencesOfString(s1, s2);
// console.log(newString);