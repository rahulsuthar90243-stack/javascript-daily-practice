
// Exercise: Greeting based on time of day and button click counter with local storage

let heading = document.querySelector("h1");


function doGreeting(username = "Dear"){

let date = new Date();
let hours = date.getHours();

if(hours < 12 && hours > 5){
    heading.innerText = `Good Morning, ${username}`;;
}else if(hours >12 && hours < 18){
    heading.innerText = `Good Afternoon, ${username}`;
}else{
    heading.innerText = `Good Evening, ${username}`;
}
}
let noOfClickes = localStorage.getItem("noOfClickes")|| 0;
function buttonPressed(){
    let button = document.querySelector("#my_button");
    updateButton(noOfClickes, button);
    button.addEventListener("click", () =>{
   
    noOfClickes++;
    updateButton(noOfClickes, button);
    localStorage.setItem("noOfClickes", noOfClickes);
  });
}

function updateButton(noOfClickes, button){
    if(noOfClickes % 2 === 0){
        button.classList.remove("js-odd");
        button.classList.add("js-even");
    }else{
        button.classList.remove("js-even");
        button.classList.add("js-odd");
    }
    button.innerText = noOfClickes;
    
}


doGreeting("Rahul");

buttonPressed();