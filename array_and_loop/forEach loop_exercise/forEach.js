// forEach

const myCoding = ["js", "c", "c++", "Java", "python"];

myCoding.forEach((item)=>{
    console.log(item);
})
console.log("\n");

myCoding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

// for(const val of myCoding){
//     console.log(val);
// }
console.log("\n");



const marks = [34, 56, 78];

marks.forEach((item)=>{
    console.log(item);
});





const coding = ["JavaScript", "Java", "Python"];

function printMe(item){
  console.log(item);
} 

coding.forEach(printMe);
console.log("\n");
myCoding.forEach(printMe);
console.log("\n");


const programming = [
    {
        languageName: "JavaScript",
        languageFile: "Js"
    },
    {
        languageName: "Python",
        languageFile: "Py"
    },
    {
        languageName: "C++",
        languageFile: "C++"
    }
]

programming.forEach((item)=>{
    console.log(item.languageName);
})
console.log("\n\n");




// Filter map

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num)=>{
//   num > 5;
// })

const newNums = myNums.filter(num=> num > 5)

console.log(newNums);
console.log("\n");



const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.map((val)=>{
//     return val + 5;
// })

const newArr = arr.map((val)=>{return val + 5})
console.log(newArr);
console.log("\n");

// multiple .map and .filter

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = myNumbers.map((num)=> num * 10)
                           .map((num)=> num + 1)
                           .filter((num)=> num > 40);
console.log(newNumber);
console.log("\n");



//reduce

const MyNum = [1, 2, 3];

// const myTotal = MyNum.reduce(function(acc, curr){
//     console.log(`acc: ${acc} and currval: ${curr}`);
//  return acc + curr;
// }, 0)
 
const myTotal = MyNum.reduce(( acc, curr)=> acc + curr, 0)


console.log(myTotal);


// shopping Cart

const shoppintCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
       {
        itemName: "Python Course",
        price: 1500
    },
       {
        itemName: "frontend Dev",
        price: 3999
    },
]

const totalPrice = shoppintCart.reduce((acc, item)=> acc + item.price, 0);
console.log("Total Price: ", totalPrice);