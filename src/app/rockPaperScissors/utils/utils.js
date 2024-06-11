export function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber];
}


export function getResultText(userChoice, computerChoice, outcome) {
  let result = "";
  const win = "you won!";
  const lose = "you suck!";
  const rockWins = "Rock breaks";
  const paperWins = "Paper covers";
  const scissorsWin = "Scissors cut";

  if(userChoice === computerChoice) {
    return "It's a draw!"
  }
  else if(outcome === "win") {
    switch(userChoice) {
      case 'rock': result = `${rockWins} ${computerChoice} ${win}`
        break;
      case 'paper': result = `${paperWins} ${computerChoice} ${win}`
        break;
      case 'scissors': result = `${scissorsWin} ${computerChoice} ${win}`
        break;
    }
  }
  else if(outcome === "lose") {
    switch(computerChoice) {
      case 'rock': result = `${rockWins} ${userChoice} ${lose}`
        break;
      case 'paper': result = `${paperWins} ${userChoice} ${lose}`
        break;
      case 'scissors': result = `${scissorsWin} ${userChoice} ${lose}`
        break;
    }
  }

  return result;
}

