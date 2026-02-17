// Array and Loop Exercise

let arr = [5, 6];
arr.push(7);
arr.unshift(4);
console.log(arr);
console.log("\n\n");
// Function to get element at a specific position (1-based index)
function getElement(Array, position){
    return Array[position - 1];
}

let Array = [1, 2, 3, 4, 5];
console.log(getElement(Array, 3));
console.log("\n\n");

// Function to copy an array
function copyArray(nums){
 return nums.slice(0, nums.length);
}

let nums = [10, 20, 30, 40, 50];
let nums2 = copyArray(nums);
console.log(nums);
nums2[0] = 5;
console.log(nums2);
console.log("\n\n");

// Function to check if a number is prime

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true;
}


let num = 2;
let i = 0;
while(true){
    if(isPrime(num)){
        console.log(num);
        i++;
        if(i >= 5){
            break;
        }
    }
    num++;
}
console.log("\n\n");


// Loop to print numbers from 10 to 1
for(let i = 10; i >= 1; i--){
    console.log(i);
}



console.log("\n\n");

// Loop to print positive numbers from an array
let a = [32, 34 ,-1, -34, 45, -43];

for(let i = 0; i < a.length; i++){
    if(a[i] > 0){
       console.log(a[i]);
    }
}
console.log("\n\n");


let text = ["Hello", "javaScript", "is", "fun"];
let result = "";
for(let i = 0; i < text.length; i++){
     result += text[i] + " ";
}

console.log(result.trim());





// Find the Largest Number in an Array

function findLargestNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const numbers = [2, 4, 1, 9, 5];
console.log(findLargestNumber(numbers));




// Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript")); // Output: tpircSavaJ