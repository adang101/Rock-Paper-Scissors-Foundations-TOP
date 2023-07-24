const objectBtn = document.querySelectorAll("div.objectBtn button");
const userPoints = document.querySelector("#userPoints");
const computerPoints = document.querySelector("#computerPoints");
const roundResults = document.querySelector("#roundResults");
const resetBtn = document.querySelector("#reset");

// Refresh page to reset game
resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userPoints.textContent = userScore;
  computerPoints.textContent = computerScore;
  roundResults.textContent = "Game reset. Choose an object to begin!";
});

// Global variables to keep track of scores inbetween games
let userScore = 0;
let computerScore = 0;

// Detect which button the user clicked (event listener)
objectBtn.forEach((button) => {
  button.addEventListener("click", userChoice);
});

// Define the event listener callback function
function userChoice(event) {
  const clickedButtonId = event.target.id;
  // console.log("User has chosen: " + clickedButtonId);
  playRound(clickedButtonId);
}

function computerPlay() {
  // Return a random choice of rock, paper, or scissors
  var randomChoice = Math.floor(Math.random() * 3);
  var computerChoice = "";

  // Map the random number to rock, paper, or scissors
  if (randomChoice == 0) {
    computerChoice = "rock";
  } else if (randomChoice == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function updateScore() {
  userPoints.textContent = userScore;
  computerPoints.textContent = computerScore;
}

// Determine winner of the round. Return winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      return "The computer won!";
    } else {
      userScore++;
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      return "The computer won!";
    } else {
      userScore++;
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      return "The computer won!";
    } else {
      userScore++;
      return "You won!";
    }
  }
}

function playRound(userChoice) {
  var computerChoice = computerPlay();

  // Log the user and computer choices to the console
  console.log("User has chosen: " + userChoice);
  console.log("Computer has chosen: " + computerChoice);

  // Display the choices to the user
  roundResults.textContent = `You chose ${userChoice} 
    and the computer chose ${computerChoice}.`;

  // Determine the winner of the round
  var winner = determineWinner(userChoice, computerChoice);

  // Display the winner of the round
  roundResults.textContent += ` ${winner}`;
  updateScore();
}
