function getComputerChoice(RNG) {
    if (RNG === 0) {
        return "rock";
    } else if (RNG === 1) {
        return "paper";
    } else if (RNG === 2) {
        return "scissors";
    }
}

function getPlayerChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();

    while (true) {
        if (choice === "rock") {
            return choice;
        } else if (choice === "paper") {
            return choice;
        } else if (choice === "scissors") {
            return choice;
        }

        choice = prompt("Invalid input. Enter Rock, Paper, or Scissors: ").toLowerCase();
    }
}

function playRound(playerChoice, computerChoice) {
    if ((playerChoice === "rock" && computerChoice == "scissors")
        || (playerChoice === "paper" && computerChoice == "rock")
        || (playerChoice === "scissors" && computerChoice == "paper")) {
        return "player";
    } else if ((playerChoice === "rock" && computerChoice == "rock")
        || (playerChoice === "paper" && computerChoice == "paper")
        || (playerChoice === "scissors" && computerChoice == "scissors")) {
        return "tie";
    } else if ((playerChoice === "rock" && computerChoice == "paper")
        || (playerChoice === "paper" && computerChoice == "scissors")
        || (playerChoice === "scissors" && computerChoice == "rock")) {
        return "computer";
    }
}