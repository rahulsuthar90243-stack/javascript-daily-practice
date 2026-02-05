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
