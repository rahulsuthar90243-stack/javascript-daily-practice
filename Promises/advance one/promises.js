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



new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: 'Rahul', gmail: 'rahul@gmail.com'});
    }, 3000)
}).then((user)=>{
    console.log(user);
})


const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({roll: 102, name: 'mahipal', course: "B.tech"});
        }else{
            reject("ERROR: something went wrong");
        }
    }, 4000)
})


promiseFour.then((user)=>{
 console.log(user);
 return user.name;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
})


const promiseArray = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        let arr = [1, 2, 3, 4, 5];
        arr.forEach((item)=>{
            console.log(item);
        resolve();

        })

        // for(const value of arr){
        //  console.log(value);
        // }

    }, 5000)
})

promiseArray.then(()=>{
    console.log("task compelete");
})



const promiseFive = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({Language: "JS", password: 123});
        }else{
            reject("Error: js went wrong");
        }
    }, 6000);
})


async function consumePromiseFive(){
    const response = await promiseFive
    try{
    console.log(response);
    }catch(error){
    console.log("Error: some wrong");
    }
}

consumePromiseFive();


const promiseMsg = new Promise ((resolve, reject)=>{

    setTimeout(()=>{
     let error = false;
     if(!error){
        resolve();
     }else{
        reject();
     }
    }, 7000)
})

promiseMsg.then((problem)=>{
 console.log("Problem are solve");
}).catch((error)=>{
 console.log("Error: problem not solve");
})

async function problem() {
    const response = await promiseMsg
    try{
        console.log("Problem are solve");
    }catch(error){
        console.log("Error: Problem not solve");
    }
}
problem();


console.log("\n\n");



// Free fake and reliable API for testing

async function getAllUsers(){
     try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await resp.json()
        console.log(data);
     }catch(ER){
        console.log("ERROR: find error!");
     }
}

// getAllUsers();



fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>{
 return  response.json();
}).then((data)=>{
    console.log(data);
})
