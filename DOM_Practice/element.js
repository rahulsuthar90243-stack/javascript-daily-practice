// Create new Element

const nweElement = document.createElement("h2");
console.log(nweElement);
nweElement.textContent = "Strike is coming";
nweElement.id = "second";

console.log(nweElement);

// select element

const element =  document.getElementById("first");
element.after(nweElement);
// element.before(nweElement);

const newElement2 = document.createElement("h3")
newElement2.textContent = "Just code it";
newElement2.id = "third";