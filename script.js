let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (guessUser, guessMachine, guessTarget) => {
  const diferenceUser = Math.abs(guessTarget - guessUser)
  const diferenceMachine = Math.abs(guessTarget - guessMachine)

  if (diferenceUser <= diferenceMachine){
    return true;
  }else{
    return false;
  }

}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
