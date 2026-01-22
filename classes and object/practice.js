let product = {
    name: "jeans",
    size: 'S',
    fit: 'slim Fit',
    'delivery-time': 'today',
};   

// Shallow Copy
let copyProduct = product;
console.log(product);
copyProduct.size = 'M';
console.log(product);
copyProduct.fit = 'regular Fit';
console.log(product);

// Deep Copy
console.log(product['delivery-time']);

let obj = {
    massage: "Hello, World!",
    status: "success",
};

// Destructuring Assignment
let {massage, status} = obj;
console.log(massage);
console.log(status);

// Object.keys()

let keys = Object.keys(product);
console.log(keys);