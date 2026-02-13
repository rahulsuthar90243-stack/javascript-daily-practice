const promiseOne = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Asysc task is compelete");
        resolve();
    }, 2000)
})


promiseOne.then((rev)=>{
    console.log("Promise consumed");
})