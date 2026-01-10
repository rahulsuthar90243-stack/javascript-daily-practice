console.dir(document.body);

// Selecting with id

let head = document.getElementById("heading");
console.dir(head);
console.log("\n");

// selecting with class

let headings = document.getElementsByClassName("MyClass");
console.dir(headings);
console.log(headings);
console.log("\n");


// selecting with tag

let tag = document.getElementsByTagName("p");
console.dir(tag);
console.log(tag);
console.log("\n");


// Query Selector

let tegs = document.querySelector("h1");   // return first list
console.dir(tegs);
console.log(tegs);
console.log("\n");

let t = document.querySelectorAll(".MyClass");   // return a Nodelist
console.dir(t);
console.log(t);
console.log("\n");

// tagName

let firstEle = document.querySelector("#tagName");
console.dir(firstEle);
console.log(firstEle.tagName);


// firstChild Property
let parentElement = document.getElementById("name").firstChild
console.log(parentElement);
console.log("\n");

let last = document.getElementById("name").children
console.log(last);


// innerText 
let div = document.querySelector("#Fruit");
console.dir(div);
console.log(div.innerText);

//innerHTML
console.log(div.innerHTML);