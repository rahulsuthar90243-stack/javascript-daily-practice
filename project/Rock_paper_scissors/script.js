let user_score = 0;
let comp_score = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
 const option = ["rock", "paper", "scissors"];
 const randIdx = Math.floor(Math.random()*3);
 return option[randIdx];
}

const drowGame = () =>{
    console.log("Drow Game!");
    msg.innerText = "Game was Drow. Play again";
    msg.style.backgroundColor = "#081b31";
}


const showWinner = (userWin, userChoice, compChoice)  => {
    if(userWin){;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor = "green";

    }else{
        msg.innerText = `You loss. ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (user_choice) =>{
    console.log("user choice = ", user_choice);

    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(user_choice === compChoice){       //drow Game
     drowGame();
    }else{
        let userWin = true;
        if(user_choice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(user_choice == "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, user_choice, compChoice);
    }
}

choices.forEach(choice =>{
   choice.addEventListener("click", () =>{
    let user_choice = choice.getAttribute("id");
   playGame(user_choice);
  })
}) 