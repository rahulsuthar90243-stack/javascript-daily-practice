// Function
function print(){    // function definition
    console.log("My name is Rahul");
}

print();
print();
console.log("\n");

function sum(x,  y){
  let sum = 0;
  sum  = x + y;
  console.log("sum of = ", sum);

}

sum(5, 5);
console.log("\n");

// factorial of number
function fact(n){
 let fact = 1;
 for(let i = 1; i <= n; i++){
    fact *= i;
 }
 return fact;
}

let factorial = fact(5);
console.log("factorial is:", factorial);
console.log("\n");

// Arrow Function

const text = () => {
    console.log("I love JavaScript")
}

text();
console.log("\n");

// product function return 
const product = (a, b) => {
    return a * b;
}

let result = product(5, 5);
console.log("result is:", result);
console.log("\n");