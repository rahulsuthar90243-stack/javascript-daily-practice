const marks = prompt("Please, enter your marks.");

if(marks >=  80 && marks <= 100){
    console.log("A Grade");
}else if(marks >=  70 && marks <= 80){
    console.log("B Grade");
}else if(marks >=  60 && marks <= 70){
    console.log("C Grade");
}else if(marks >= 40 && marks <= 60){
    console.log("D Grade");
}else{
    console.log("Faile");
}