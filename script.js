
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'Rock';

        case 1:
            return 'Paper';

        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    console.log(`Player choice: ${playerChoice}`);

    const computerChoice = computerSelection.toLowerCase();
    console.log(`Computer choice: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        return `It's a Draw! ${playerChoice} can't beat ${computerChoice}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    function updateScores() {
        const scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    }

    function announceWinner() {
        const resultsDiv = document.getElementById('results');

        if (playerScore >= 5 || computerScore >= 5) {
            if (playerScore > computerScore) {
                resultsDiv.textContent = "Congratulations! You win the game!";
            } else if (playerScore < computerScore) {
                resultsDiv.textContent = "Sorry, you lose the game.";
            } else {
                resultsDiv.textContent = "It's a tie! The game is a draw.";
            }

            return true; 
        }

        return false; 
    }

    function handleButtonClick(playerSelection) {
        if (announceWinner()) {
            return;
        }

        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = `Round: ${result}`;

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }

        updateScores();
        announceWinner();
    }

    document.getElementById('rockBtn').addEventListener('click', () => handleButtonClick('rock'));
    document.getElementById('paperBtn').addEventListener('click', () => handleButtonClick('paper'));
    document.getElementById('scissorsBtn').addEventListener('click', () => handleButtonClick('scissors'));
}

game();