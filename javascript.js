// create function that return one of rock paper and scissors
function getComputerChoice() {

    // variable that return between 0 and 1
    let rpsNumber = Math.random();

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

// create function that get one of rock paper scissors input from user
function getHumanChoice() {

    // loop until user input valid input
    while (true) {
        // prompt to user to type valid input
        let userInput = prompt("Choose one of rock, paper or scissors").toLowerCase();

        // check if user type valid input and if true return and if not alert and ask again
        if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
            console.log(userInput);
            return userInput;
        }

        else {
            alert("Type only one of rock, paper or scissors");
        }
    }
}
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
playGame();