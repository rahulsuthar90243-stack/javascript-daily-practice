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