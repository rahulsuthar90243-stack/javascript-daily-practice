// create h1 heading element with text Hello JavaScript!.

let h2 = document.querySelector("h1");
console.dir(h2.innerText);

// add From Appna Collage Student
 
h2.innerText  = h2.innerText + "from Appna Collage student";

// 
let divs = document.querySelectorAll(".box");
console.dir(divs);

let idx = 1;
for(div of divs){
console.log(div.innerText);
div.innerText = `My name is Rshul ${idx}`
idx++;
}

// divs[0].innerText = "Hello May Nane is Rahul";
// divs[1].innerText = "Hello May Nane is Mahipal";
// divs[2].innerText = "Hello May Nane is Vp";