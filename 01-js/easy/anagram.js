/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

str1 = "listen";
str2 = "silent";

function isAnagram(str1, str2) {
 
  if(str1.length !== str2.length) {
    return false;
  }
  if(str1.split('').sort().join('') === str2.split('').sort().join('')) {
    return true;
  }
  return false;

}

console.log(isAnagram(str1, str2));

module.exports = isAnagram;
