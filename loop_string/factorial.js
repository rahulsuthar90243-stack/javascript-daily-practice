const num = prompt("Please, enter number of factorial.");
let text = document.querySelector("#text");
let result = document.querySelector("#result b");

let fact = 1;

for(let i = 1; i <= num; i++){
    fact *= i;
}

text.innerText = `Your number is: ${num}`;

result.innerText = `Number ${num} is Factorial ${fact}`

// console.log(`Number ${num} is Factorial ${fact}`);