const promiseOne = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task is compelete");
        resolve();
    }, 1000)
})


promiseOne.then((rev)=>{
    console.log("Promise consumed");
})



new Promise (function(resolve, reject){
    setTimeout(function(){
    console.log("Async task 2 ");
    resolve()
    }, 2000)
    
}).then(function (){
    console.log("Async task 2 compelete");
})