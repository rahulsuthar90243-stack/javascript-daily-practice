const user = {
    name: "Rahul",
    age: 18,
    emailId: "rahul!gmail.com",
    amount: 4000,
}

console.log(user.age);

// object destructing
const {name, age} = user;
console.log(name, age);



console.log("\n\n");
for(const val in user){
    console.log(user[val]);
}


console.log("\n\n");



// for of loop
const student = {
    studentName: "Mahipal",
    age: 18,
    class: 12,
}

for(const [key, value] of Object.entries(student)){
    console.log(key, value);
} 
console.log("\n\n");


// this.value used to access the specific value property of the current object 

const std = {
    studentName: "Mahipal",
    age: 18,
    class: 12,
    greeting: function(){
        console.log(`Strike is coming on 10 feb ${this.studentName}`);
    }
}
const std2 = {
    studentName: "Rahul",
    age: 18,
    class: 12,
    greeting: function(){
        console.log(`Strike is coming on 10 feb ${this.studentName}`);
    }
}

std.greeting();
std2.greeting();

console.log("\n\n");



// nested object

const detail = {
    name: "Rahul ",
    age: 18,
    emailId: "rahul!gmail.com",
    amount: 4000,
    address: {
        city: "Sirohi",
        state: "Rajasthan",
    }
}

console.log(detail.address);
console.log(detail.address.city);
console.log("\n\n");

//shallow copy

 const detai1 = {
    name: "Rahul ",
    age: 18,
    emailId: "rahul!gmail.com",
    amount: 4000,
    address: {
        city: "Sirohi",
        state: "Rajasthan",
    }
}


//shallow copy
const detai2 = {...detai1};
detai2.name = "Vp";
console.log(detai1);
console.log(detai2);
console.log("\n");

// detai2.address.city = "Jalore";
// console.log(detai1);
// console.log(detai2);


