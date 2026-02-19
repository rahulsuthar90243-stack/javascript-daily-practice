
const sayDate = function(str){
    console.log(str, Date.now());
}
let intervalId;

const quotes = [
    "A rose by any other name would smell as sweet.",
    "All that glitters is not gold.",
    "All the world’s a stage, and all the men and women merely players.",
    "Ask not what your country can do for you; ask what you can do for your country.",
    "Elementary, my dear Watson.",
    "He travels the fastest who travels alone."
];


const changeText = function(str){
    const index =  Math.floor((Math.random()*6));
    document.querySelector("h1").innerText = quotes[index];
    console.log(str, Date.now());
}


document.querySelector("#start").addEventListener("click", function(){
    intervalId = setInterval(changeText, 1000, "Jut Code It")
    console.log("Start");
})

document.querySelector("#stop").addEventListener("click", function(){
    clearInterval(intervalId);
    console.log("Stop");
})