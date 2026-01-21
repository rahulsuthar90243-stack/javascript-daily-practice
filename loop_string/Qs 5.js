// Prompt the user to enter fullName generate a username for than base on the input.
// start with "@" and end with the Length of the fullName.

// let fullName = prompt("Enter your full name: ");
// let char = "@";
// let length = fullName.length;

// let username = char.concat(fullName, length);

// console.log("Generated username: ", username);


// or
let fullName = prompt("Enter your full name: ");
let username = "@" + fullName + fullName.length;

console.log("Generated username: ", username);