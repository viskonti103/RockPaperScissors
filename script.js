function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'Rock'; 

        case 1:
            return 'Paper';

        case 2:
            return 'Scissors'
   
    }
}


function playRound(playerSelection, computerSelection) {

    const playerChoice = playerSelection.toLowerCase();


    if (playerChoice === computerSelection.toLowerCase()) {

        return `It's a Draw! ${playerChoice} can't beat ${computerSelection}`;
    } else if (
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {

        return `You Win! ${playerChoice} beats ${computerSelection}`;
    } else {

        return `You Lose! ${computerSelection} beats ${playerChoice}`;
    }
}



function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors): ").toLowerCase();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}: ${result}`);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game.");
    } else {
        console.log("It's a tie! The game is a draw.");
    }

}



game()