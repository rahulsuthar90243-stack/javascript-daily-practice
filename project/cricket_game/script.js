const buttons = document.querySelectorAll(".btn");
const reset = document.getElementById("Reset");



let score  = JSON.parse(localStorage.getItem('cricketScore')) || {
 Win: 0,
 Loss: 0,
 Tie: 0,
}


score.display = function (){
  localStorage.setItem('cricketScore', JSON.stringify(score));

  

  return  "Scoreboard: " + "\n" + "Wins: " + score.Win + 
        "  Losses: " + score.Loss + "  Ties: " + score.Tie;
 }


 reset.addEventListener("click", () =>{
  
  score.Win = 0;
  score.Loss = 0;
  score.Tie = 0;
 
  localStorage.setItem('cricketScore', JSON.stringify(score));

  document.getElementById("score").innerText = score.display();
  document.getElementById("user-move").innerText = "";
  document.getElementById("comp-move").innerText = "";
  document.getElementById("result").innerText = "";


});

buttons.forEach((button) =>{
    button.addEventListener("click", () =>{

        let user_choice = button.dataset.choice
        
      const choice = ["Bat", "Ball", "Stump"];
      const randomIndex = Math.floor(Math.random() * 3);
      const compChoice = choice[randomIndex];

      let result = '';

      if(user_choice === compChoice){
        result = "It's a Tie";
        score.Tie++;
      } else if((user_choice === "Bat" && compChoice === "Ball") || 
                (user_choice === "Ball" && compChoice === "Stump") ||
                (user_choice === "Stump" && compChoice === "Bat")){
            result = "You Win";
  
            score.Win++;
      } else{
        result = "Computer Win";
        score.Loss++;
      }

      document.getElementById("user-move").innerText = "You chosen: " + user_choice;
      document.getElementById("comp-move").innerText = "Computer chosen: " + compChoice;
      document.getElementById("result").innerText = result;
      document.getElementById("score").innerText = score.display();

      
      // ("You choice: " + user_choice + "\n" + "computer choice: " + compChoice + "\n\n" + result + "\n\n" + score.display());
    })
})