 
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
   
      console.log("round : " , round );
       
      if(ComputerChoice == UserChoice)
    {
        console.log("oops game tie");
         console.log("");
    }

    else if(!UserChoice)
    {
        console.log("since u never choose any of this so you lost the game ");
         console.log("");
         
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
     
     // console.log("your running score : " , UserScore);
     // console.log(" Computer running score : " , ComputerScore);

    ComputerRunningScore.textContent = "computer score : " +ComputerScore;
    UserRunningScore.textContent = "Your Score : " +UserScore;
     
     console.log("\n");
     console.log("..........******.........");
      console.log("\n");
    
    return [UserScore , ComputerScore ];
  }

  
  let HumanScore = 0;
  let ComputerScore = 0;

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
        
         const computerSelection = GetComputerChoice();
     
     // console.log( "you select : " , humanSelection);
     // console.log( "computer select : " , computerSelection);
     
      // console.log("");

        const ComputerRunningScore = document.createElement("div");
        document.body.appnedChild( ComputerRunningScore);

        const UserRunningScore = document.createElement("div");
        document.body.appendChild(UserRunningScore);
     
     result = PlayRound( HumanScore , ComputerScore , round , humanSelection , computerSelection);
       

    HumanScore = result[0];
    ComputerScore = result[1];

       

 // final score

    if(round === 6)
      {
       const Winner = document.createElement("ul");
       document.body.appendChild(Winner);
         
       ComputerRunningScore.textContent = "Final computer score : " +result[1];

       UserRunningScore.textContent = "Your Final Score : " +result[0];
       
      if(ComputerScore > HumanScore)
     {
         Winner.textContent  = "You lost";      
     }

      else if(ComputerScore == HumanScore)
     {
          Winner.textContent = "game tie";
     }
  
     else
    {
        Winner.textContent = "You Win"
    }
      }
        
     }
  
       
