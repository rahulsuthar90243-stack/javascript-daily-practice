
//create multiply variable and assing function

// let multiply = function(num1, num2){
//     return num1 * num2;
// }

let multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 5));
console.log("\n");

let printGreeting = () =>{ console.log("Namaste");
}

let runTwice = inputFunction =>{
 inputFunction();
 inputFunction();
}

runTwice(printGreeting);
console.log("\n");


let button = document.querySelector(".btn");

// button.addEventListener("click", function (){
//        setTimeout(function (){
//         button.classList.add("js-btn-big");
//        }, 2000);

//        setTimeout(function (){
//         button.classList.remove("js-btn-big");
//        }, 3000);
// });

button.addEventListener("click", even =>{
    setTimeout( even =>{
        button.classList.add("js-btn-big");
       }, 2000);

       setTimeout( even =>{
        button.classList.remove("js-btn-big");
       }, 3000);
})

console.log("\n");

let arr = [1, 2, 3, 4];
let sum = 0;

// arr.forEach((value) =>{
//     sum += value;
// })

arr.forEach(num => sum += num);


console.log(`Sum is ${sum}`)

// let square = arr.map((num) =>{
//     return num * num;
// })

let square = arr.map(num => num * num);
console.log(square);