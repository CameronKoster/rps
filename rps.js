let computerChoices = ["rock", "paper", "scissors"]


function play(playerChoice) {

  let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  let results = ""

  if (playerChoice() == "paper") {
    if (computerChoice == "rock") {
      results = "WIN!!!"
    }
    else if (computerChoice == "scissors") {
      results = "LOSE!!!"
    }
    else {
      results = "DRAW!!!"
    }
  }



  if (playerChoice == "scissors") {
    if (computerChoice == "paper") {
      results = "WIN!!!"
    }
    else if (computerChoice == "rock") {
      results = "LOSE!!!"
    }
    else {
      results = "DRAW!!!"
    }
  }




  if (playerChoice == "rock") {
    if (computerChoice == "scissors") {
      results = "WIN!!!"
    }
    else if (computerChoice == "rock") {
      results = "LOSE!!!"
    }
    else {
      results = "DRAW!!!"
    }
  }
  document.getElementById('words').innerText = results
}