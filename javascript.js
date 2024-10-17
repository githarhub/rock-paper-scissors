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

