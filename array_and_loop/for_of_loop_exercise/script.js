const greeting = ["a", "b", "c", "d"];

for(const n of greeting){
  console.log(n);
}
console.log("\n");

const name = ["rahul", "mahipal", "vp", "manoj"];

for(const val of name){
    console.log(val);
}


const map = new Map();

map.set("IN", "India");
map.set("USA", "United status of America");
map.set("Fr", "France");
map.set("IN", "India");

for(const val of map){
    console.log(val);
}

// for(const key in map){
//     console.log(key);
// }






// object

const user = {
    firstName: "Mahipal",
    lastName: "Singh",
    age: 20,
}

for(const key in user){
    console.log(user[key]);
}
console.log("\n");

const student = {
    name: "Rohit Kumar",
    class: 10,
    age: 17,
}

for(const val in student){
  console.log(val, student);
}
console.log("\n");