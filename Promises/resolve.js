// Promises

let promises = new Promise((resolve, reject) =>{
    console.log("I am a promis1");
    resolve("success");
});



 function getData(dataid, getNextData){
 
   return new Promise ((resolce, reject) =>{
    setTimeout( () =>{
        console.log("Data",dataid );
        resolce("success");
        if(getNextData){
        getNextData();
        }
    }, 5000);
   });
}


let promise = getData();