//1
console.log("Rahul Suthar", "how to code");
//2
console.log(45*2-10);
// 3
const currentDate = new Date();
console.log(currentDate.getFullYear());

// 4
var first = "Rahul";
var last = "Suthar";
// console.log(first+" "+last);
console.log(`${first} ${last}`);

// 5
let a = 15;
console.log(a);
a = 90;
console.log(a);  

// 6
console.error("Error opening file!");
// 7
console.log(5*5);
// 8
let t = true;
console.log(typeof(t));

// 9
let age = 25;

if(age > 18){
    console.log(true);
}else{
    console.log(false);
}

// 10
console.log(100/0);

// 11

let aa = 45;
console.log(aa);

// 12
const pi = Math.PI;
console.log(pi);

// 13

let r = 10;
r = 20;
console.log(r);

// 14
console.log(typeof (null));

// 15
let str = "450";
console.log(typeof str);

// 16
let b = true;
console.log(typeof b);

// 17

let s = "Rahul";
let n = 34;
let T = true;

console.log(typeof s);
console.log(typeof n);
console.log(typeof T);

console.log(s, n, T);

// 19
let Un = undefined;

console.log(typeof Un);

// 20

const arr = [1, 2, 3, 4];
arr.pop();
console.log(arr);


//Loops
// 21

for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log("\n");

// 22
let ss = 1;
let sum = 0;

while(ss <= 10){
    sum += ss;
    ss++;
}
console.log(`Sum is ${sum}`);

// 23

let name = "Rahul";

for (let value of name){
    console.log(value);
}

// 24
// for(let i = 0; i < 10; i++){
//  if(i % 2 == 0){
//     continue;
//  }else{
//     console.log("odd number", i);
//  }
// }

 for(let i = 0; i < 10; i++){
 if(i % 2 !== 0){
    console.log("odd number", i);
 }
}


// 25
let d = 5;
do{
    console.log(d);
    d--;
} while(d > 0);

// 26

let fact = 1;
for(let i = 1; i <= 5; i++){
    fact *= i;
}

console.log(`factorial is ${fact}`);

// 27
let no = 1;
for(let i = 1; i <= 3; i++){
    let str = "";
    for(let j = 1; j <= 3; j++){
        str += `${no}`;
        no++;
    }
    console.log(str);;
}

// 28

let rev = [1, 2, 3, 4, 5];
// for(let i = rev.length-1; i >= 0; i--){
//     console.log(rev[i]);

// }

for(let i = 0; i < rev.length / 2; i++){
    let temp = rev[i];
    rev[i] = rev[rev.length - 1 - i];
    rev[rev.length - 1 - i] = temp;
}
console.log(rev);

// 29

let num = 1;
while(num <= 50){
    if(num % 5 === 0){
        console.log(num);
    }
    num++;
}


// 30

let obj = {
    name: "Rahul",
    email: "@email.com",
    age: 20,
}

for(let key in obj){
    console.log(key);
}

//Arrays
//31

let movie = ["a", "b", "c", "d", "e", "f"];

// for(let i = 0; i < movie.length; i++){
//     console.log(movie[i]);
// }

movie.forEach(function(value){
    console.log(value);
})

//32
let No = [1, 2, 3, 4];
console.log("array of second element: ",No[1]);

// 33
No.unshift(0);
console.log(No);

//34
No.pop();
console.log(No);

// 35
console.log(No.slice(0, 3));

// 36
console.log(No.indexOf(2));

// 37
console.log(No.includes(12));
console.log(No.includes(2));

// 38
let No2 = [4, 5, 6];
console.log(No.concat(No2));

// 39
let sort = [5, 4, 3, 2, 1];
// console.log(sort.toSorted());

for(let i = 0; i < sort.length - 1; i++){
    for(let j = 0; j < sort.length - 1 - i; j++){
        if(sort[i] > sort[i+1]){
            let temp = sort[i];
            sort[i] = sort[i+1];
            sort[i+1] = temp;
        }
    }
}
console.log(sort); 


// 40
let sortCopy = [];

// for(let i = 0 ; i < sort.length; i++){
//    sortCopy.push(sort[i]);
// }

sort.forEach(function(value){
    sortCopy.push(value);
})
console.log(sortCopy);

sortCopy.pop();
console.log(sort, sortCopy);


// Functions
// 41
function evenOdd(num){
    if(num % 2 === 0){
        console.log("Even number", num);
    }else{
        console.log("Odd number", num);
    }
}

evenOdd(2);

//42

function  area(r){
    return Math.floor(Math.PI * r * r);
}

console.log(`area of circle: ${area(5)}`);

// 43

function sumOfArray(arr){
    let sum = 0;
 arr.forEach(function(value){
   sum += value;
 })
 return sum;
}
console.log(`Sum of Array: ${sumOfArray([1, 2, 3, 4, 5])}`);
// console.log("sum of arr: ", sumOfArray([1, 2, 3, 4, 5]));


// 44

function checker(str, char){
    return str.toLowerCase().startsWith(char.toLowerCase());
}

console.log(checker("Rahul", "r"));
console.log(checker("Mahipal", "M"));
console.log(checker("Vp", "p"));

// 45
function maxNum (num1, num2){
    if(num1 > num2){
        console.log(`Maximum is num1 ${num1}`);
    }else{
        console.log(`Maximum is num2 ${num2}`);
    }
}

maxNum(5, 10); 


// 46

function factorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i++){
    fact *= i;
    }
    return fact;
}

console.log("Factorial is: ", factorial(5));

// 47

function reverse(value){
 return value.split('').reverse().join('');
}

console.log(reverse("Rahul"));


// 48
function arrLarger(arr){
    let max = 0;

   for(let i = 1; i < arr.length; i++){
    if(arr[i] > arr[max]){
         max = arr[i];
    }
   }
   return max;
}

console.log(arrLarger([3, 2, 16, 9]));

// 49

function kabab(str){
    return str.split(' ').join('--');
}

console.log(kabab("JavaScript is the best language"));

// 50
function log(value){
    console.log("Hello How are you");
}

log();
log();