const quotes = [
    "A rose by any other name would smell as sweet.",
    "All that glitters is not gold.",
    "All the world’s a stage, and all the men and women merely players.",
    "Ask not what your country can do for you; ask what you can do for your country.",
    "Elementary, my dear Watson.",
    "He travels the fastest who travels alone."
];


const button = document.querySelector("#btn");
const quote = document.querySelector("#quote");

button.addEventListener("click", ()=>{
    const index = Math.floor(Math.random() * 6);
    quote.textContent = quotes[index];
})