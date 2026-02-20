// async function return a promise:

async function data1(){
    return "Rahul";
}

// Equivalent to: 

function myfunction(){
    return Promise.resolve("Your tack is complete");
}




// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=> console.log(data));


async function github() {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

github();

console.log("task complete");