// input arr and perfome task.
let n = prompt("Please, enter a number");

let arr = [];

for(let i = 1; i <= n; i++){
    arr[i - 1] = i;
}

console.log(arr);

// sum of arr
let sum = arr.reduce((res, curr) => {
    return res + curr;
})

console.log("Sum of arr is: ", sum);

// factorial
let fact = arr.reduce((res, curr) => {
    return res * curr;
})

console.log("factorial =: ", fact);
