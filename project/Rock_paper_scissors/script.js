let user_score = 0;
let comp_score = 0;


const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
 const option = ["Rock", "Papaer", "Scissors"];
 const randIdx = Math.floor(Math.random()*3);
 return option[randIdx];
}

const playGame = (user_choice) =>{
    console.log(user_choice);

    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
}

choices.forEach(choice =>{
   choice.addEventListener("click", () =>{
    let user_choice = choice.getAttribute("id");
   playGame(user_choice);
  })
}) 