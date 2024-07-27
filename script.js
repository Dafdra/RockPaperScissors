function getComputerChoice(){
    let result = Math.floor(Math.random() * 3);
    
    if (result === 0) {
        return ("Rock");
    } else if (result === 1) {
        return ("Paper");
    } else {
        return ("Scissors");
    }

}


function getHumanChoice(){
    let human = prompt("What's your option?");
    return human;
}

let humanChoice = getHumanChoice().toLowerCase();
let computerChoice = getComputerChoice().toLowerCase();


console.log("Computer chose: " + computerChoice);
console.log("Human chose: " + humanChoice);

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win!");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Win!");
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You Win!");
    } else if (humanChoice === computerChoice){
        console.log("It's a draw!");
    } else {
        console.log("HA! You lose!");
    }
}

playRound(humanChoice, computerChoice);










