 
    function GetComputerChoice()
  {
    let ComputerChoice;
       
    let choices = ["rock" , "paper" , "scissors"];

    let RandomIndex = Math.floor(Math.random() * choices.length);

  ComputerChoice = choices[RandomIndex];
    return ComputerChoice;
  }
   
  function PlayRound( UserScore , ComputerScore , round , UserChoice , ComputerChoice)
  {
  
      if(ComputerChoice == UserChoice)
    {
        console.log("oops game tie");
    }

    else if(!UserChoice)
    {
        console.log("since u never choose any of this so you lost the game ");
         
         ComputerScore = ComputerScore + 1;
    }

    else if( (UserChoice == "rock" && ComputerChoice == "scissors" 
        || UserChoice == "paper" && ComputerChoice == "rock" 
        || UserChoice == "scissors"&& ComputerChoice == "paper") )
        {
            console.log("congratulation! You Won that round of game");
            UserScore = UserScore + 1;
             console.log("");
        }
        
     else
     {
        console.log("you lost the game AND computer WIN");
        ComputerScore = ComputerScore + 1;
         console.log("");
     }
     
     console.log("\n");
     console.log("..........******.........");
      console.log("\n");
    
    return [UserScore , ComputerScore ];
  }

  
  let HumanScore = 0;
  let ComputerScore = 0;

       const ScoreContainer  = document.createElement("div");

        ScoreContainer.style.display  = "flex";
        ScoreContainer.style.justifyContent = "space-between";
        ScoreContainer.style.width = "300px";
        ScoreContainer.style.marginTop = "20px";
        
         document.body.appendChild(ScoreContainer);


        const ComputerRunningScore = document.createElement("div");
        ScoreContainer.appendChild( ComputerRunningScore);

        const UserRunningScore = document.createElement("div");
        ScoreContainer.appendChild(UserRunningScore);

        const Points = document.createElement("div")
         document.body.appendChild(Points)
         Points.style.marginTop = "20px";


   const RockButn = document.createElement("button");
   const PaperButn = document.createElement("button");
   const ScissorButn = document.createElement("button");

     RockButn.textContent = "Rock";
     PaperButn.textContent = "Paper";
     ScissorButn.textContent = "Scissors";  

  document.body.appendChild(RockButn);
  document.body.appendChild(PaperButn);
  document.body.appendChild(ScissorButn);

    RockButn.addEventListener("click" , function()
      {
          PlayGame("rock");                  
      })

     PaperButn.addEventListener("click" , function()
       {
          PlayGame("paper");
       })

     ScissorButn.addEventListener("click" , function()
       {
           PlayGame("scissors");
       })
        
       const Winner = document.createElement("div");
       document.body.appendChild(Winner);
        Winner.style.marginTop = "30px";
        Winner.style.fontWeight = "bold";
        Winner.style.fontSize = "20px";

    let result;
    let round = 0;

       function PlayGame(humanSelection)
       {
        if(round >= 6)
        {
         console.log("game over");
         return;
        }
        
        round++;
        Points.textContent = "round :" +round;
        
         const computerSelection = GetComputerChoice();
     
     result = PlayRound( HumanScore , ComputerScore , round , humanSelection , computerSelection);

      HumanScore = result[0];
      ComputerScore = result[1];

        ComputerRunningScore.textContent = "computer score : " +ComputerScore;
        UserRunningScore.textContent = "Your Score : " +HumanScore;
       
    

       

 // final score

    if(round === 6)
      {
      
       ComputerRunningScore.textContent = "Final computer score : " +result[1];

       UserRunningScore.textContent = "Your Final Score : " +result[0];
       
      if(ComputerScore > HumanScore)
     {
         Winner.textContent  = "😢 Computer Wins the Game!";      
     }

      else if(ComputerScore == HumanScore)
     {
          Winner.textContent = "🤝 game tie";
     }
  
     else
    {
        Winner.textContent = "🎉 You Win"
    }
      }
        
     }
  
       
