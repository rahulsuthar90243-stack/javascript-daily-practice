// Array to store and perform this task
// remove first company
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log("companies:", companies);
let remove = companies.shift();
console.log("companies:", companies);
console.log('Remove: ', remove);
console.log("\n");

// remove Uber & add Ola
let replace = companies.splice(1, 1, 'Ola');
console.log("companies:", companies);
console.log('Remove:', replace);
console.log("\n");

// add amazon at the and
let add = companies.push('Amazon');
console.log("companies:", companies);
console.log('add:', add);
console.log("\n");


