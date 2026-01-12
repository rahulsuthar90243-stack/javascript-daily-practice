// Attributes

let div = document.querySelector("div");
console.log(div)

let hello = div.getAttribute("id");
console.log(hello);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));


// change attribute
console.log(para.setAttribute("class", "new_class"));


// Style

div = document.querySelector("div");
div.style.backgroundColor = "red";
div.style.fontSize = "25px";
div.innerText = "Hello JavaScript!";

// Insert Element

let new_button = document.createElement("button");
new_button.innerText = "click me!";
console.log(new_button);

div = document.querySelector("div");
// append
div.append(new_button);

// prepend
div.prepend(new_button);

// before
div.before(new_button);

// after
let p = document.querySelector("p");
p.after(new_button);


// add new heading

let new_h = document.createElement("h1");
new_h.innerHTML = "<i>hello I am new!</i>";

document.querySelector("body").prepend(new_h);


// Delete Element
// remove button
// new_button = document.querySelector("button");
new_button.remove(new_button);


// appendChild

let parentdiv = document.getElementById("content");

let new_p = document.createElement("p");
new_p.textContent = "This paragraph was added with appendChild()!";

parentdiv.appendChild(new_p);


// removeChild

parentdiv = document.getElementById("content");
parentdiv.removeChild(new_p);