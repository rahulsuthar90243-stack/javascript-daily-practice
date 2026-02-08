const div = document.querySelector("#clock");


setInterval(()=>{
let time = new Date();
div.textContent = time.toLocaleTimeString();
}, 1000)


