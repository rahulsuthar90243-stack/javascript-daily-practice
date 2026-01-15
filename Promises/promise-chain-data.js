function getData(dataid, getNextData){
   return new Promise ((resolce, reject) =>{
    setTimeout( () =>{
        console.log("Data",dataid );
        resolce("successfull data resolve");
        if(getNextData){
        getNextData();
        }
    }, 2000);
   });
};



getData(1)
 .then((res) =>{
    console.log(res);
    return getData(2);
 }).then((res) =>{
    console.log(res);
    return getData(3);
 }).then((res) =>{
    console.log(res);
 })



// getData().then((res) =>{
//     console.log(res);
//     getData().then((res) =>{
//         console.log(res);
//         getData().then((res) =>{
//          console.log(res);
//         })
//     })
// })




// let promise1 = getData();
// promise1.then((res) =>{
//     console.log(res);
//     let promise2 = getData();
//     promise2.then((res) =>{
//         console.log(res);
//         let promise3 = getData();
//         promise3.then((res) =>{
//          console.log(res);
//         })
//     })
// })


// callback hell

// getData(1, () =>{
//     console.log("getting data2....");
//     getData(2, ()=>{
//         console.log("getting data3....");
//         getData(3, ()=>{
//             console.log("getting data4....");
//            getData(4, ()=>{
//             getData(5);
//       });   
//     });
//   });
// });