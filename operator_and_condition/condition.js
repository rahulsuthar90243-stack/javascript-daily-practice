// if statement
let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
}

// if-else statement
let age = 18;

if(age >= 18){
    console.log("You are an adult.");
}else{
    console.log("You are not a adult.");
}

// if-else if-else multiple conditions
let marks = 90;

if(marks >= 90){
    console.log("Grade A");
}else if(marks >= 75){
    console.log("Grade B");
}else if(marks >= 50){
    console.log("Grade C");
}else{
    console.log("Fail");
}

//Trnary Operator
let time = 10;
let result = time < 12 ? "Good Morning" : "Good Afternoon";
console.log(result);