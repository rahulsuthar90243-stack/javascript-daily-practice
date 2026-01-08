// Array Methods

// push - adds one or more elements to the end of an array

let fruits = ['apple', 'banana'];
console.log('Before push:', fruits);

fruits.push('orange', 'pineapple');
console.log(`After push: ${fruits}`);
console.log('original fruits array:', fruits);

let numbers = [1, 2, 3];
console.log('Before push:', numbers);
numbers.push(4, 5, 6);
console.log('After push:', numbers);
console.log('\n');

// pop - removes the last element from an array

let vegetables = ['carrot', 'broccoli', 'spinach'];
console.log('Before pop:', vegetables);
let lastVegetable = vegetables.pop();  // removes 'spinach'
console.log('After pop:', vegetables);
console.log('Popped element:', lastVegetable);
console.log('\n');

// toString - converts an array to a string

let colors = ['red', 'green', 'blue'];
console.log('Before toString:', colors);
console.log('After toString:', colors.toString());

let animals = ['dog', 'cat', 'elephant'];
console.log('Before toString:', animals);
console.log('After toString:', animals.toString());
console.log('\n');

// Concat - merges two or more arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = arr1.concat(arr2);
console.log('Array 1:', arr1);
console.log('Array 2:', arr2);
console.log('Merged Array:', mergedArray);

let letters1 = ['a', 'b', 'c'];
let letters2 = ['d', 'e', 'f'];
let combinedLetters = letters1.concat(letters2);
console.log('Letters 1:', letters1);
console.log('Letters 2:', letters2);
console.log('Combined Letters:', combinedLetters.toString());
console.log('\n');

// shift - removes the first element from an array
let state = ['Rajasthan', 'Madhya Pradesh', 'Gujarat', 'Punjab'];
console.log('Before shift:', state);
let firstState = state.shift(); // removes 'Rajasthan'
console.log('After shift:', state);
console.log('Shifted element:', firstState);

let cities = ['New York', 'Los Angeles', 'Chicago'];
console.log('Before shift:', cities);
let firstCity = cities.shift(); // removes 'New York'
console.log('After shift:', cities);
console.log('Shifted element:', firstCity);
console.log('original cities array:', cities);
console.log('\n');

// Slice - returns a shallow copy of a portion of an array into a new array object
let numbersArray = [10, 20, 30, 40, 50, 60];
console.log('Before slice:', numbersArray);
let SlicedArray = numbersArray.slice(2, 5); // extracts elements from index 2 to 4
console.log('Sliced Array (index 2 to 5):', SlicedArray);
console.log('Original Array:', numbersArray);

let chars = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log('Before slice:', chars);
let slicedChars = chars.slice(1, 4); // extracts elements from index 1 to 3
console.log('Sliced Chars (index 1 to 4):', slicedChars);
console.log('Original Chars Array:', chars);
console.log('\n');

// splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
let techStack = ['HTML', 'CSS', 'JavaScript', 'React'];
console.log('Before splice:', techStack);
techStack.splice(2, 1, 'TypeScript'); // removes 'JavaScript' and adds 'TypeScript' at index 2
console.log('After splice:', techStack);

//add
techStack.splice(2, 0, "Node.js"); // adds 'Node.js' at index 2 without removing any element
console.log('After adding Node.js:', techStack);

//remove
techStack.splice(3, 1); // removes 'TypeScript' at index 3
console.log('After removing TypeScript:', techStack);

//replace
techStack.splice(1, 1, 'Sass'); // replaces 'CSS' with 'Sass' at index 1
console.log('After replacing CSS with Sass:', techStack);