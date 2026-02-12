// zomato application

const orderDetail = {
    orderId: 12003,
    food: ["Pizza", "coke", "biryani", "bakhadi"],
    cost: 1500,
    customer: "Rahul",
    customer_location: "baag colony",
    restaurant_location: "jaipur"
}


function placedOrder(callback){
    console.log("Payment is in progress");

    setTimeout(()=>{
        console.log("Payment is received and order get placed");
        callback();
    }, 3000)
}

function preparingOrder(callback){
    console.log("Your food preparation started");

    setTimeout(()=>{
        console.log("Your order is now preparad");
        callback();
    }, 3000)
}


function pickupOrder(callback){
    console.log("Delivery boy is on way to pickup order");

    setTimeout(()=>{
        console.log("I have pickup the order");
        callback();
    }, 3000)
}

function deliverOrder(){
    console.log("I am on my way to deliver order");

    setTimeout(()=>{
        console.log("Order delivered succesfully");
    }, 3000)
}


placedOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
});


function checkInventory(callback){
    setTimeout(()=>{
    console.log("checking the inventory...");
    callback();
    }, 2000)
}

function createOrder(callback){
    setTimeout(()=>{
        console.log("create order...");
        callback();
    }, 1000)
}

function chargePayment(callbcak){
    setTimeout(()=>{
        console.log("charging the payment...");
        callbcak();
    }, 2000)
}

function sendInverntory(callback){
    setTimeout(()=>{
        console.log("send inverntory...");
        callback();
    }, 1000);
}

function main(){
    checkInventory(()=>{
        createOrder(()=>{
            chargePayment(()=>{
                sendInverntory(()=>{
                    console.log('All done.');
                });
            });
        });
    });
            
console.log("Outher request processing");
}

main();
// checkInventory();
// createOrder();
// chargePayment();
// sendInverntory();
// console.log("All tast conplete.");