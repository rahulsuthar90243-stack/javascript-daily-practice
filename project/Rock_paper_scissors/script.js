let user_score = 0;
let comp_score = 0;


const choices = document.querySelectorAll(".choice");

const playGame = (user_choice) =>{
    console.log(user_choice);
}

choices.forEach(choice =>{
   choice.addEventListener("click", () =>{
    let user_choice = choice.getAttribute("id");
   playGame(user_choice);
  })
}) 