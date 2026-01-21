// String Methods
// str.toUpperCase()
let str = "Hello, World!";
console.log(str);
str = str.toUpperCase();
console.log(str); // "HELLO, WORLD!"

// str.toLowerCase()

let name = "RAHUL SUTHAR";
console.log("\n");
console.log(name);
name = name.toLowerCase();
console.log(name); // "rahul suthar"

// str.trim()
let text = "   aap kaise ho   "
console.log("\n");
console.log(text);

text = text.trim();
console.log(text); // "aap kaise ho"

// str.slice()
let username = "rahulsuthar";
console.log("\n");
console.log(username);

username = username.slice(0, 5);
console.log(username); // "rahul"
username = username.slice(0, 4);
console.log(username); // "rahul"

// str.concat()
let firstName = "Mahipal";
let lastname = " Singh";
console.log("\n");

let fullName = firstName.concat(lastname);
console.log(fullName); // "Mahipal Singh"
fullName = firstName.concat(" Kumar");
console.log(fullName); // "Mahipal Kumar"

//str.replace()
let greeting = "Hello, World!";
console.log("\n");
console.log(greeting);  // "Hello, World!"

greeting = greeting.replaceAll("World", "JavaScript");
console.log(greeting); // "Hello, JavaScript!"

greeting = greeting.replaceAll("Hello, JavaScript!", "Namaste, JavaScript!");
console.log(greeting); // "namaste, JavaScript!"

// str.charAt()
let Language = "JavaScript";
console.log("\n");
console.log(Language); // "JavaScript"
let char = Language.charAt(4);
console.log(char); // "S"
char = Language.charAt(0);
console.log(char); // "J"