// Input a number using prompt("Enter a number"). check if the number is a multiple of 5 or not.
let num = prompt("Enter a number");
if(num % 5 === 0){
    console.log(num,"is a multiple of 5");
}else{
    console.log(num,"is not a multiple of 5");

}

// Give grade to student accoding to their score.
/* 80-100 = A
70-89 = B
60-69 = C
50-59 = D
0- 49 = F */

let score  = 90;

if(score >=80 && score <= 100){
    console.log("Grade A");
}else if(score >=70 && score <= 89){
    console.log("Grade B");
}else if(score >=60 && score <= 69){
    console.log("Grade C");
}else if(score >=50 && score <= 59){
    console.log("Grade D");
}else{
    console.log("Grade F");
}