// zomato application

const orderDetail = {
    orderId: 12003,
    food: ["Pizza", "coke", "biryani", "bakhadi"],
    cost: 1500,
    customer: "Rahul",
    customer_location: "baag colony",
    restaurant_location: "jaipur"
}
// placeOrder
const pay = document.querySelector("#pay")
const resive = document.querySelector("#resive");

document.querySelector("#btn").addEventListener("click", ordering);


function placedOrder(orderDetail){
    pay.textContent = `${orderDetail.cost} Payment is in progress`;  //console.log(`${orderDetail.cost} Payment is in progress`);
    return new Promise ((resolve, reject)=>{

    if(Math.random() > 0.1){
    setTimeout(()=>{
        resive.textContent = `Payment is received and order get placed`;//console.log("Payment is received and order get placed");
        resolve(orderDetail);
    }, 1000)
    }
    else{
        reject("Payment is failed");
    }
    })
}

// preparingOrder
const started = document.querySelector("#started");
const preparad = document.querySelector("#preparad");



function preparingOrder(orderDetail){
    started.textContent = `Your food preparation started of ${orderDetail.food}`;//console.log(`Your food preparation started of ${orderDetail.food}`);
    return new Promise((resolve)=>{

    if(Math.random() > 0.05){
    setTimeout(()=>{
    preparad.textContent = "Your order is now preparad" ;   //console.log("Your order is now preparad");
        resolve(orderDetail);
    }, 3000)
    }
    else{
        reject("Food is not persent at restaurant");
    }
    })
   
}

// pickupOrder
const Deliver = document.querySelector("#Delivery");
const pinkup = document.querySelector("#pickup")

function pickupOrder(orderDetail){
    Deliver.textContent =  `Delivery boy is on way to pickup order from ${orderDetail.restaurant_location}`; //console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location}`);

    return new Promise ((resolve, reject)=>{

    if(Math.random() > 0.05){
    setTimeout(()=>{
        pinkup.textContent = "I have pickup the order";  //console.log("I have pickup the order");
        resolve(orderDetail);
    }, 5000)
    }else{
        reject("Delivery boy unable to reach restaurant");
    }
    })
}

// deliverOrder;
const orderDeliver = document.querySelector("#orderDeliver");
const success = document.querySelector("#successfull");


function deliverOrder(orderDetail){
    orderDeliver.textContent  = `I am on my way to deliver order ${orderDetail.customer_location}`; //console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

     return new Promise ((resolve)=>{
    setTimeout(()=>{
        success.textContent = "Order  delivered successfull"; //console.log("Order delivered succesfully");
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

