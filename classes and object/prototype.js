//  Prototype
const employee = {
    calcTax(){
        console.log("tax rate is 20%");
    }
};

const Rahul_Kumar1 = {
    salary: 50000,
}

const Rahul_Kumar2 = {
    salary: 50000,
}

const Rahul_Kumar3 = {
    salary: 50000,
}

const Rahul_Kumar4 = {
    salary: 50000,
    calcTax(){
        console.log("tax rate is 10%");
    }
}

Rahul_Kumar1.__proto__ = employee;
Rahul_Kumar2.__proto__ = employee;
Rahul_Kumar3.__proto__ = employee;
Rahul_Kumar4.__proto__ = employee;

