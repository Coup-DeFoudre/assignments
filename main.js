// // make a counter using settimeout

// let counter = 0;

// function incrementCounter() {
//     counter++;
//     console.log(counter);
//     }

// function runCounter() {
//     setTimeout(function() {
//         incrementCounter();
//         runCounter();
//     }, 1000);
// }

// runCounter();


let fs = require('fs');
let result = fs.readFileSync("file.txt", "utf8");
console.log( result);
fs.writeFileSync("file.txt", "Hello World", "utf8");
result = fs.readFileSync("file.txt", "utf8");
console.log(result);
