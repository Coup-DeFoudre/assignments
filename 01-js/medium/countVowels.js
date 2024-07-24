/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

let fs = require('fs');
let str = fs.readFileSync("file.txt", "utf8");

str = str.toLowerCase();

function countVowels(str) {

  let result = {a:0, e:0, i:0, o:0, u:0};
   for (let i =0;i<str.length;i++){
      switch(str[i]){
        case 'a':
          result.a++;
          break;
        case 'e':
          result.e++;
          break;
        case 'i':
          result.i++;
          break;
        case 'o':
          result.o++;
          break;
        case 'u':
          result.u++;
          break;
      }


}
return result;
}

console.log(countVowels(str));

module.exports = countVowels;