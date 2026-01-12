// Insert Element

let bt = document.createElement("button");
bt.innerText = "Click me!";
bt.style.backgroundColor = "red";
bt.style.color = "white";
console.log(bt);

// let new_bt = document.querySelector("body");
// new_bt.prepend(bt);

document.querySelector("body").prepend(bt);

let para = document.querySelector("p");

// new class
// para.setAttribute("class", "new_class");  


// add new class
para.classList.add("new_class");