// Calculate average marks of a class. 
let marks = [45, 67, 78, 98, 87, 79];
let sum = 0;

for (let i =0; i < marks.length; i++){
    sum += marks[i];
}
let ave = sum / marks.length;
// console.log("average =", ave);
console.log(`average marks of class is ${ave.toFixed(2)}`)
console.log("\n");


// Calculate final price after discount for items in a store.
let items = [250, 300, 900, 100, 50];

for(let i = 0; i < items.length; i++){
    let offerPrice = items[i] / 10;
    items[i] -= offerPrice;
}

console.log("final prices after discount:", items);
// // for-of loop
// let i = 0;
// for(let val of items){
//  let offerPrice = val / 10;
//  fainalPrice = val - offerPrice;
//  i++;
//  console.log(`item ${i} : original price = ${val} , offer price = ${offerPrice}, final price = ${fainalPrice}`);
// }


