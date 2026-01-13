
class toyotacar{
    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
    // setBrand(brand){
    //  this.brand = brand;
    // }
}

let furtuner = new toyotacar("toyota", 10); //constructor
console.log(furtuner);
let lexus = new toyotacar("toyota" , 10);    //constructor
console.log(furtuner);
// furtuner.setBrand("furtuner");

