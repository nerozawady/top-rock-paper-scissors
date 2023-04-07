const playerChoiceText = document.querySelector(".player-choice-text");
const computerChoiceText = document.querySelector(".computer-choice-text");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const choiceButtons = document.querySelectorAll('.player-buttons button');
const gameResultModal = document.querySelector('.game-result-modal');
const gameResultText = document.querySelector('.game-result');

const MAX_ROUNDS = 5;

let rounds = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(RNG) {
    if (RNG === 0) {
        return "Rock";
    } else if (RNG === 1) {
        return "Paper";
    } else if (RNG === 2) {
        return "Scissors";
    }
}

function decideWinner(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if ((playerChoice === "rock" && computerChoice == "scissors")
        || (playerChoice === "paper" && computerChoice == "rock")
        || (playerChoice === "scissors" && computerChoice == "paper")) {
        return "player";
    } else if ((playerChoice === "rock" && computerChoice == "rock")
        || (playerChoice === "paper" && computerChoice == "paper")
        || (playerChoice === "scissors" && computerChoice == "scissors")) {
        return "none";
    } else if ((playerChoice === "rock" && computerChoice == "paper")
        || (playerChoice === "paper" && computerChoice == "scissors")
        || (playerChoice === "scissors" && computerChoice == "rock")) {
        return "computer";
    }
}

function playRound() {
    const choiceButton = this;
    const playerChoice = choiceButton.attributes.choice.value;
    // get a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = getComputerChoice(randomNumber);

    const winner = decideWinner(playerChoice, computerChoice);
    if (winner === "player") {
        playerScore += 1;
        rounds += 1;
    } else if (winner === "computer") {
        computerScore += 1;
        rounds += 1;
    }

    updatePlayerChoiceDOM(playerChoice);
    updatePlayerScoreDOM(playerScore);
    updateComputerChoiceDOM(computerChoice);
    updateComputerScoreDOM(computerScore);

    if (rounds >= MAX_ROUNDS) {
        updateGameResultModal(playerScore > computerScore);
    }
}

function updatePlayerScoreDOM(playerScore) {
    playerScoreText.textContent = playerScore;
}

function updateComputerScoreDOM(computerScore) {
    computerScoreText.textContent = computerScore;
}

function updatePlayerChoiceDOM(playerChoice) {
    playerChoiceText.textContent = playerChoice;
}

function updateComputerChoiceDOM(computerChoice) {
    computerChoiceText.textContent = computerChoice;
}

function updateGameResultModal(playerWon) {
    if (playerWon) {
        gameResultText.textContent = "You Won!";
    } else {
        gameResultText.textContent = "You Lost!";
    }

    gameResultModal.classList.toggle("hidden");
}

choiceButtons.forEach(button => button.addEventListener("click", playRound));