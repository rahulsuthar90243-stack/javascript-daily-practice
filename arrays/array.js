//  Arrays

let arr = [1, 2, 3, 4, 5];

// for loop
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log("\n");

let obj = {a: 1, b: 2, c: 3};

// for...in loop
for(let key in obj){
    console.log(key, "=", obj[key]);
}

console.log("\n");

let el = {a: 1, b: 2, c: 3};

// for...in loop
for(let key in el){
    console.log(key, "=", el[key]);
}
console.log("\n");

let heroes = ["Superman", "Thor", "Batman", "Spiderman"];

// for-of loop
for(let hero of heroes){
    console.log(hero.toUpperCase());
}
console.log("\n");

let marvel = ["Superman", "Thor", "Batman", "Spiderman"];

// for-of loop
for(let hero of marvel){
    console.log(hero);
}

const number = [1, 2, 3, 4, 5];

for(let value of num){
    console.log(value);
}



// Array and Loop Exercise

let arr2 = [5, 6];
arr2.push(7);
arr2.unshift(4);
console.log(arr2);
console.log("\n\n");
// Function to get element at a specific position (1-based index)
function getElement(Array, position){
    return Array[position - 1];
}

let Array = [1, 2, 3, 4, 5];
console.log(getElement(Array, 3));
console.log("\n\n");