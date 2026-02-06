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