let user_score = 0;
let comp_score = 0;


const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
 const option = ["rock", "paper", "scissors"];
 const randIdx = Math.floor(Math.random()*3);
 return option[randIdx];
}

const drowGame = () =>{
    console.log("Drow Game!");
}


const showWinner = (userWin)  => {
    if(userWin){
        console.log("You win");
    }else{
        console.log("you loss");
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
        showWinner(userWin);
    }
}

choices.forEach(choice =>{
   choice.addEventListener("click", () =>{
    let user_choice = choice.getAttribute("id");
   playGame(user_choice);
  })
}) 