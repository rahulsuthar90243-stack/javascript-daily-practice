// promise.catch()

function getPromise(){
   return new Promise ((resolce, reject) =>{
    console.log("I am a newPromise");
    reject("error")
   })
}

let promiseValue = getPromise();

// .catch
promiseValue.catch((err) =>{
    console.log("process reject")
})