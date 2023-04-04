function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
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