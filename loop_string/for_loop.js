// for loop

let name = "Rahul";
for (let i = 0; i < 5; i++){
    console.log(name);
}

for(let i = 1; i <= 10; i++){
    console.log("i = ", i);
}

let sum = 0;
for(let i = 1; i <= 5; i++){
    sum += i;
}

console.log("sum = ", sum);

for(let i = 5; i >= 1; i--){
    console.log("i = ", i);
}


// for - of - of loop
let myname = "Rahul";
let size = 0;
for(let char of myname){
    console.log(char);
    size++;
}

console.log("size of string is :", size);

// for - in - of loop
let students = {
    name: "Rahul",
    age: 20,
    course: "BCA",
    collage: "SP Collage Sirohi",
};

for(let key in students){
    console.log("key is: ", key , "and value is: ", students[key]);;
}

let s = 0;
for(let key in students){
    s++;
}

console.log("size of object is: ", s);