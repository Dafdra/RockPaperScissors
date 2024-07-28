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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You Win!");
            humanScore++;
    } else if (humanChoice === computerChoice){
        console.log("It's a draw!");
    } else {
        console.log("HA! You lose!");
        computerScore++;
    }
}

playRound(humanChoice, computerChoice);

let Scores = "Player: " + humanScore + " Computer: " + computerScore;

function playGame(rounds){
    for (let i = 0; i <rounds; i++){
        const humanChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
        const computerChoice = getComputerChoice().toLowerCase();
    playRound(humanChoice, computerChoice);
    }
}

playGame(5);