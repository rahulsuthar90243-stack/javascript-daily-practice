const body = document.querySelector("body");

body.addEventListener("click", (e)=>{
        
const circleElement = document.createElement("div");

circleElement.classList.add('circle');

const text = ['HI', 'JS', 'CODE', 'C++', 'PYTHON'];

circleElement.textContent = text[Math.floor(Math.random()*5)];

const color = ['red', 'orange', 'blue', 'green', 'pink', 'purple'];
circleElement.style.backgroundColor = color[Math.floor(Math.random()*6)];
circleElement.style.top = `${e.clientY -25}px`;
circleElement.style.left = `${e.clientX -25}px`;

body.append(circleElement);

setTimeout(()=>{
 circleElement.remove();
}, 5000)
})

