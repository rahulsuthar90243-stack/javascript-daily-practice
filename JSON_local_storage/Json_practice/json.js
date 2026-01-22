let project = {
    name: "Leptop",
    price: 12000,
    color: "Black",
    rating: {
        stars: 4.5,
        count: 2343,
    }
};

// Convert JS object to JSON string

console.log(typeof project);
console.log(project);

let str = JSON.stringify(project);
console.log(typeof str);
console.log(str);

// Convert JSON string back to JS object
str = JSON.parse(str);
console.log(typeof str);
console.log(str);