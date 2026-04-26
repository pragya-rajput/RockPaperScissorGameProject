
 function GetHumanChoice()
  {
      let UserChoice;
      
      UserChoice = prompt("enter choice(any one of that from Rock , Paper and scissor ) : ");
       
      return UserChoice;
      
  }
   
    function GetComputerChoice()
  {
    let ComputerChoice;
       
    let choices = ["rock" , "paper" , "scissor"];

    let RandomIndex = Math.floor(Math.random() * choices.length);

  ComputerChoice = choices[RandomIndex];
    return ComputerChoice;
  }
   
  function PlayRound(i , UserScore , ComputerScore , UserChoice , ComputerChoice)
  {
      console.log("round : " , i+1);
       
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

    else if(UserChoice == "Rock" && ComputerChoice == "Scissor" 
        || UserChoice == "Paper" && ComputerChoice == "Rock" 
        || UserChoice == "Scissor"&& ComputerChoice == "Paper")
        {
            console.log("congratulation! You Won the game");
            UserScore = UserScore + 1;
             console.log("");
        }
        
     else
     {
        console.log("you lost the game AND computer WIN");
        ComputerScore = ComputerScore + 1;
         console.log("");
     }
     
     console.log("your score for this round is : " , UserScore);
     console.log(" Computer score for this round is : " , ComputerScore);
     
     console.log("\n");
     console.log("..........******.........");
      console.log("\n");
    
    return [UserScore , ComputerScore ];
  }

  
  let HumanScore = 0;
  let ComputerScore = 0;
  
  let result;
  
  for(let i = 0; i < 6; i++)
  {
     const humanSelection = GetHumanChoice();
     const computerSelection = GetComputerChoice();
     
     console.log( "you select : " , humanSelection);
     console.log( "computer select : " , computerSelection);
     
      console.log("");
     
     result = PlayRound(i , HumanScore , ComputerScore , humanSelection , computerSelection);
   
    HumanScore = result[0];
    ComputerScore = result[1];
    
  }
  
 // final score
 
  if(ComputerScore > HumanScore)
  {
     console.log("Computer win the game");
     console.log("computer total score : ", result[1]);
  }
  
  else
  {
     console.log("You win the game");
     console.log("Your total score : ", result[0]);
  }
  

