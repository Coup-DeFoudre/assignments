/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

let str = "suussus";
str = str.toLowerCase();


function isPalindrome(str) {

  let str_len = str.length;
  if(str_len%2==0){
    let str1 = str.slice(0,str_len/2);
    let str2 = str.slice(str_len/2,str_len);
    if(str1 === str2.split("").reverse().join("")){
      return true;
    }else{
      return false;
    }
  }
  else{
    let str1 = str.slice(0,str_len/2);
    let str2 = str.slice(str_len/2+1,str_len);
    if(str1 === str2.split("").reverse().join("")){
      return true;
    }else{
      return false;
    }
  }


 
}

console.log(isPalindrome(str));



module.exports = isPalindrome;
