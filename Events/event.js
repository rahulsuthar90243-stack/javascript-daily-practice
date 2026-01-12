
let bt1 = document.querySelector("#bt1");
bt1.onclick = () => {
  console.log("bt1 was clicked");
  let a = 25;
  a++;
  console.log(a);
};

// const bt2 = document.querySelector("#bt2");
//  bt2.ondblclick = () => {
//   console.log("clicked 2 times!");
// };

let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log("Inside div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

div.addEventListener("mouseover", (evt) => {
console.log("Inside div");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
})


bt1.addEventListener("click", () =>{
    console.log("clicked button 1");
})

bt1.addEventListener("click", () =>{
    console.log("clicked button 2");
})

const handler3 = () =>{
    console.log("clicked button 3");
};

bt1.addEventListener("click", handler3)

bt1.addEventListener("click", () =>{
    console.log("clicked button 4");
})

bt1.removeEventListener("click", handler3);