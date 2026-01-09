// array methods
// Map
let arr2 = [5, 4, 3, 2, 1];

let new_arr2 = arr2.map((val) =>{
    return val *val
})

console.log(new_arr2);
console.log("\n");

//Filter

let number = [1, 2, 3, 4, 5, 6, 7];

let even_num = number.filter((val) => {
    return val % 2 === 0;
})

console.log(`Even number: ${even_num}`);
console.log("Even number:", even_num);
console.log("\n");

let no = [45, 34, 23, 34, 67, 78, 65];

let new_num = no.filter((val) => {
    return val > 50;
})

console.log("New_num: ", new_num);
console.log("\n");


// reduce
let marks = [5, 7, 9, 2, 3];

let new_mrks = marks.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
})

console.log("Total merks: ", new_mrks);


let highest_marks = marks.reduce((revious, current) => {
    return revious > current ? revious : current
})

console.log("Highest marks is:", highest_marks);