// Find the largest number in an array

function findLargestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Example
const numbers = [10, 5, 20, 8, 15];

const result = findLargestNumber(numbers);

console.log("Largest number is:", result);