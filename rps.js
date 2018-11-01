function play(playerChoice) {


  //rock
  let computersChoiceRock = "rock";
  if (playerChoice == "paper") {
    return (alert("WIN!!!"))
  }; 
  else if (playerChoice == "scissors") {
    return (alert("LOSE!!!"))
  };
  else (playerChoice == "rock") {
    return (alert("DRAW!!!"))
  };



  //paper
  let computersChoicePaper = "paper";
  if (playerChoice == "scissors") {
    return (alert("WIN!!!"))
  }; 
  else if (playerChoice == "rock") {
    return (alert("LOSE!!!"))
  };
  else (playerChoice == "paper") {
    return (alert("DRAW!!!"))
  };



  //scissor
  let computersChoiceScissors = "scissors";
  if (playerChoice == "rock") {
    return (alert("WIN!!!"))
  }; 
  else if (playerChoice == "rock") {
    return (alert("LOSE!!!"))
  };
  else (playerChoice == "scissors") {
    return (alert("DRAW!!!"))
  };





}