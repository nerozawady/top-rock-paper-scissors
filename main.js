const MAX_ROUNDS = 5;

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

function getRoundResultString(roundResult) {
    if (roundResult === "player") {
        return "Round Result: player wins";
    } else if (roundResult === "tie") {
        return "Round Result: tie";
    } else if (roundResult === "computer") {
        return "Round Result: computer wins";
    }
}

function getGameResultString(playerPoints) {
    if (playerPoints >= 3) {
        return "You won!";
    } else if (playerPoints < 3) {
        return "You lost!";
    }
}

function game() {
    let rounds = 0;
    let roundResult = "";
    let playerChoice = "";
    let computerChoice = "";
    let playerPoints = 0;
    let computerPoints = 0;
    let RNG = 0;

    while (rounds < MAX_ROUNDS) {
        console.log("Round " + (rounds + 1) + " of " + MAX_ROUNDS);

        playerChoice = getPlayerChoice();
        RNG = Math.floor(Math.random() * 3);
        computerChoice = getComputerChoice(RNG);

        roundResult = playRound(playerChoice, computerChoice);

        if (roundResult === "player") {
            playerPoints += 1;
        } else if (roundResult === "computer") {
            computerPoints += 1;
        }

        console.log("Player: " + playerChoice);
        console.log("Computer: " + computerChoice);
        console.log(getRoundResultString(roundResult));
        console.log("\n");

        if (roundResult !== "tie") {
            rounds += 1;
        }
    }

    console.log(getGameResultString(playerPoints));
}

game();