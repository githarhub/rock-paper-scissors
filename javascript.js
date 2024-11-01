// get reference of buttons
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const divRounds = document.querySelector(".rounds");

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

};



// play when user click button
function pickAndPlay(pickButton) {
    pickButton.addEventListener("click", () => {
        const humanChoice = pickButton.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        showWinner(humanChoice, computerChoice);
    });

};

// global variable that count winner score of human and computer
let humanScore = 0;
let computerScore = 0;
let roundsTime = 0;


// create function that check winner and increment winner Score and log winner
function playRound(humanChoice, computerChoice) {

    // check winner 
    // check if it is tie
    if ( humanChoice == computerChoice){
        // do not increment both score and log tie
        return "Tie";
    }

    // check if human choose rock
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            humanScore += 1;
            return "Human Win";
        }

        else {
            computerScore += 1;
            return "Computer Win";
        }
    }

    // check if human choose paper
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore += 1;
            return "Human Win";
        }

        else {
            computerScore += 1;
            return "Computer Win";
        }
    }

    // check if human choose scissor 
    else {
        if (computerChoice == "paper") {
            humanScore += 1;
            return "Human Win";
        }

        else {
            computerScore += 1;
            return "Computer Win";
        }
    }
};

// append inside of div with class rounds in DOM 
function showWinner(humanChoice, computerChoice) {
    roundsTime += 1;
    const computer = document.createElement("div");
    const human = document.createElement("div");
    const winner = document.createElement("div"); 
    // get winner by playing game
    const getWinner = playRound(humanChoice, computerChoice);

    human.textContent = `Human Choice is ${humanChoice.toUpperCase()}`;
    computer.textContent = `Computer Choice is ${computerChoice.toUpperCase()}`;
    winner.textContent = getWinner;

    divRounds.appendChild(human);
    divRounds.appendChild(computer);
    divRounds.appendChild(winner);

    if (roundsTime % 5 == 0 && roundsTime != 0) {
        winner.textContent = `Final Winner, ${getWinner}`;
        divRounds.appendChild(winner);
        const br = document.createElement("br");
        divRounds.appendChild(br);
    };
};


// call the function
pickAndPlay(rockButton);
pickAndPlay(paperButton);
pickAndPlay(scissorsButton);