
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let value = "";

buttons.forEach(function (button) {
    button.addEventListener("click", () =>{
        let buttonText = button.innerText;


        if(buttonText === "c"){
            value = "";
            display.value = "";
        }
        else if(buttonText === "="){
         try {
                value = eval(value);   // calculation
                display.value = value;
            } catch {
                display.value = "Error";
                value = "";
            }
        }
        else{
            value = value + buttonText;
            display.value = value;
        }

    })
}) 