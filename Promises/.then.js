// promise.then 

function getPromise(){
   return new Promise ((resolce, reject) =>{
    console.log("I am a newPromise");
    // resolce("success");
    reject("error")
   })
}

let promiseValue = getPromise();

// .then()
promiseValue.then((res) =>{
    console.log("process successful");
})
