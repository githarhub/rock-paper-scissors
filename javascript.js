// create function that return one of rock paper and scissor 
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
        return "scissor";
    }

}
