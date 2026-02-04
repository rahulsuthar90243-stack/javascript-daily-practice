// function definition

function sum(...num){
   let sum = 0;

   for(let n of num){
    sum += n;
   }
   return sum;
//    console.log(n);
}

console.log(sum(5, 5, 5));

function checkPassFaile(marks){
 if(marks >= 40){
    console.log("You are pass");
 }else{
    console.log("You are faile");
 }
}

checkPassFaile(89);