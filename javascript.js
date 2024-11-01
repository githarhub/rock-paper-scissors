// get reference of buttons
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

// create function that return one of rock paper and scissors
function getComputerChoice() {

    // variable that return between 0 and 1
    const rpsNumber = Math.random();

    if (rpsNumber <= 0.3333333333333333) {
        return "rock";
    }

    else if (rpsNumber > 0.3333333333333333 && rpsNumber <= 0.6666666666666666) {
        return "paper";
    }

    else {
        return "scissors";
    }

}



// play when user click button
function pickAndPlay(pickButton) {
    pickButton.addEventListener("click", () => {
        const humanChoice = pickButton.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

};

// global variable that count winner score of human and computer
let humanScore = 0;
let computerScore = 0;


// create function that check winner and increment winner Score and log winner
function playRound(humanChoice, computerChoice) {

    // check winner 
    // check if it is tie
    if ( humanChoice == computerChoice){
        // do not increment both score and log tie
        console.log("Tie");
    }

    // check if human choose rock
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("Human Win");
            humanScore += 1;
        }

        else {
            console.log("Computer Win");
            computerScore += 1;
        }
    }

    // check if human choose paper
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Human Win");
            humanScore += 1;
        }

        else {
            console.log("Computer Win");
            computerScore += 1;
        }
    }

    // check if human choose scissor 
    else {
        if (computerChoice == "paper") {
            console.log("Human Win")
            humanScore += 1;
        }

        else {
            console.log("Computer Win");
            computerScore += 1;
        }
    }
}


// created function to play entire game
function playGame () {

    // play playRound five time
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice())
    }

    // check the winner of the game 
    if (humanScore > computerScore) {
        alert("Human is the winner of the game.");
    }

    else if (humanScore < computerScore) {
        alert("Computer is the winner of the game.");
    }

    else {
        alert("There is no winner of the game. Tie!");
    }
}

// call the function
pickAndPlay(rockButton);
pickAndPlay(paperButton);
pickAndPlay(scissorsButton);