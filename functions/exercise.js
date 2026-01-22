// check even and odd number

function evenOdd(number){
    if(number % 2 === 0){
        return"Even Number"
    }else{
        return"Odd Number";
    }
}

console.log(evenOdd(10));
console.log(evenOdd(5));
console.log(evenOdd(0));
console.log(evenOdd(60));
console.log(evenOdd(6));


// find larger number

function largernum(num1, num2){
    if(num1 > num2){
        console.log("Larger Number is: " + num1);
    }else if(num2 > num1){
      console.log("Larger Number is: " + num2);
    }else{
        console.log("Both number are equal");
    }
}

largernum(10, 20);
largernum(200, 150);
largernum(20, 20);
largernum(20, 5);


// Celcius to Fahrenheit conversion

function toFahrenheit(celcius){
    let fhrenheit = (celcius * 9/5) + 32; 
    return fhrenheit;
}

console.log(toFahrenheit(0));       //32