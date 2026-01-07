// Qs 1. print all even number fron 1 to 100.

for(let num = 0; num <= 100; num++){
    if(num % 2 == 0){
        console.log("evennumber:", num);
    }
}
// Qs 2. create  a game where you start with any random number, 
// ask the user guessing the number until the user enter correct value

let random_no = 20;
let user_guess = prompt("Guess the number between (1-100):");

while(user_guess != random_no){
    user_guess = prompt("You enter wrong number, please try again:");
}

console.log("Congratulation! You guessed the correct number:", random_no);