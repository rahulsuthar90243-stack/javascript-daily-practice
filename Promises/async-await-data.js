function getData(dataid){
   return new Promise ((resolce, reject) =>{
    setTimeout( () =>{
        console.log("Data",dataid );
        resolce("successfull data resolve");
    }, 2000);
   });
};


// Async-await

async function getAllData(){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
    console.log("getting data5...");
    await getData(5);

}


// LLFE
// function 1.
// (async function(){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
//     console.log("getting data5...");
//     await getData(5);

// })();


// function 2.
// (async() =>{
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
//     console.log("getting data5...");
//     await getData(5);
// })();


// getData(1)
//  .then((res) =>{
//     console.log(res);
//     return getData(2);
//  }).then((res) =>{
//     console.log(res);
//     return getData(3);
//  }).then((res) =>{
//     console.log(res);
//  })

const dob =  (age)=>{
    const currentYear = 2026;
    return currentYear - age;
}

console.log(dob(2007));

function factorial(n){

    if(n === 1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
//factorial(3)
//Output:-6;