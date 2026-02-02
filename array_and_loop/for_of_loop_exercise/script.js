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