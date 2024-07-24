/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

let numbers = [3, 11, 2, 9, 1];

function findLargestElement(numbers) {
  let largestElement = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestElement) {
      largestElement = numbers[i];
    }

  }
return largestElement;
}

console.log(findLargestElement(numbers));

module.exports = findLargestElement;