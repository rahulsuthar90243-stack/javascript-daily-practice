const num = prompt("Please, enter number of factorial.");
let fact = 1;

for(let i = 1; i <= num; i++){
    fact *= i;
}

console.log(`Number ${num} is Factorial ${fact}`);