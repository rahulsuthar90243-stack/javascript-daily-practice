// Qs 6 Creat a funtion string argument and return number of vowels.
function CountVowels (str){
    let count = 0;
 for(const char of str){
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        count++;
    }
 }
 return count;
}

let vowels = CountVowels("Rahul");
console.log("Vowels is:", vowels);
console.log("\n");

// Qs 7 same task in arrow function

const Vowelvow = (str) =>{
     let count = 0;
 for(const char of str){
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        count++;
    }
 }
 return count;

}
let re = CountVowels("Suthar");
console.log("Vowels is:", re);