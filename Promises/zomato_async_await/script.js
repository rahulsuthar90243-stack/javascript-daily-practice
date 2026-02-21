// zomato application

const orderDetail = {
    orderId: 12003,
    food: ["Pizza", "coke", "biryani", "bakhadi"],
    cost: 1500,
    customer: "Rahul",
    customer_location: "baag colony",
    restaurant_location: "jaipur"
}


function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);
    return new Promise ((resolve, reject)=>{

    if(Math.random() > 0.1){
    setTimeout(()=>{
        console.log("Payment is received and order get placed");
        resolve(orderDetail);
    }, 1000)
    }
    else{
        reject("Payment is failed");
    }
    })
}

function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);
    return new Promise((resolve)=>{

    if(Math.random() > 0.05){
    setTimeout(()=>{
        console.log("Your order is now preparad");
        resolve(orderDetail);
    }, 3000)
    }
    else{
        reject("Food is not persent at restaurant");
    }
    })
   
}


function pickupOrder(orderDetail){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location}`);

    return new Promise ((resolve, reject)=>{

    if(Math.random() > 0.05){
    setTimeout(()=>{
        console.log("I have pickup the order");
        resolve(orderDetail);
    }, 5000)
    }else{
        reject("Delivery boy unable to reach restaurant");
    }
    })
}

function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

     return new Promise ((resolve)=>{
    setTimeout(()=>{
        console.log("Order delivered succesfully");
    }, 3000)
    })
  
}



async function ordering(){
    try{
    const response1 = await placedOrder(orderDetail);
    const response2 = await preparingOrder(response1);
    const response3 = await pickupOrder(response2);
    const response4 = await deliverOrder(response3);
    }catch(error){
        console.log("Error: ", error);
    }


}

ordering();


// placedOrder(()=>{
//     preparingOrder(()=>{
//         pickupOrder(()=>{
//             deliverOrder();
//         });
//     });
// });




// function checkInventory(callback){
//     setTimeout(()=>{
//     console.log("checking the inventory...");
//     callback();
//     }, 2000)
// }

// function createOrder(callback){
//     setTimeout(()=>{
//         console.log("create order...");
//         callback();
//     }, 1000)
// }

// function chargePayment(callbcak){
//     setTimeout(()=>{
//         console.log("charging the payment...");
//         callbcak();
//     }, 2000)
// }

// function sendInverntory(callback){
//     setTimeout(()=>{
//         console.log("send inverntory...");
//         callback();
//     }, 1000);
// }

// function main(){
//     checkInventory(()=>{
//         createOrder(()=>{
//             chargePayment(()=>{
//                 sendInverntory(()=>{
//                     console.log('All done.');
//                 });
//             });
//         });
//     });
            
// console.log("Outher request processing");
// }

// main();
// // checkInventory();
// // createOrder();
// // chargePayment();
// // sendInverntory();
// // console.log("All tast conplete.");