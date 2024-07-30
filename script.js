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
    let human = prompt("Choose: rock, paper, scissors");
    return human;
}

let humanChoice = getHumanChoice().toLowerCase();
let computerChoice = getComputerChoice().toLowerCase();

let humanScore = 0;
let computerScore = 0;
const rounds = 5;

function playRound(humanChoice, computerChoice){
    console.log("Computer chose: " + computerChoice);
    console.log("Human chose: " + humanChoice);

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
    
    let scores = "Player: " + humanScore + " Computer: " + computerScore;
    console.log(scores);
    }

for (let i = 0; i <rounds; i++){
        const humanChoice = prompt("Choose: rock, paper, scissors").toLowerCase();
        const computerChoice = getComputerChoice().toLowerCase();
    playRound(humanChoice, computerChoice);
    }

function playGame(playRound){
    playRound(5);  
}