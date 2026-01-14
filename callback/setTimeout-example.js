Asynchronous
console.log("one");
console.log("two");

function hello(){
    console.log("Hello");
}

setTimeout(hello, 4000);

console.log("three");
