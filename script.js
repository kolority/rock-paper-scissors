let playerScore = 0;
let computerScore = 0;
let winner;

function computerPlay() {
    choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "rock"
    }
    else if (choice === 1) {
        return "paper"
    }
    else if (choice === 2) {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        winner = "It's a tie! You both picked " + playerSelection + "."
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        winner = "You lose! Paper beats rock."
        computerScore++;
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        winner = "You win! Rock beats scissors."
        playerScore++;
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        winner = "You win! Paper beats rock."
        playerScore++;
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        winner = "You lose! Scissors beats paper."
        computerScore++;
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        winner = "You lose! Rock beats scissors."
        computerScore++;
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        winner = "You win! Scissors beats paper."
        playerScore++;
    }
    updateScores();
}

function game() {

    let playerSelection = prompt("Rock, paper, or scissors?");
    let checkWinner = playRound(playerSelection, computerPlay());
    console.log(checkWinner);

    // for(let gameCount = 0; gameCount< 5; gameCount++){ 
    //     let playerSelection = prompt("Rock, paper, or scissors?");         
    //     let checkWinner = playRound(playerSelection, computerPlay());
    //     console.log(checkWinner);
    //     if (checkWinner.search("win") > -1){
    //         playerScore++;
    //     }   
    //     else if(checkWinner.search("lose") > -1){
    //         computerScore++;
    //     }
    // }
    // if(playerScore > computerScore){
    //     console.log("You win! Final score is: " +playerScore+ " to " +computerScore+ ".")
    // }
    // else if(playerScore < computerScore){
    //     console.log("You lose. Final score is: " +playerScore+ " to " +computerScore+ ".")
    // }
    // else{
    //     console.log("It was tie! Final score is: " +playerScore+ " to " +computerScore+ ".")
    // }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        playRound(button.id,computerPlay());
    })
})

const container = document.querySelector('#container');

const scoresP = document.createElement('div');
scoresP.classList.add('scores');
scoresP.textContent = 'Your score:' + playerScore;

const scoresC = document.createElement('div');
scoresC.classList.add('scores');
scoresC.textContent = 'Computer score:' + computerScore;

const winStatus = document.createElement('div');
winStatus.classList.add('status');
winStatus.textContent = winner;

container.appendChild(scoresP);
container.appendChild(scoresC);
container.appendChild(winStatus);

function updateScores(){
    scoresP.textContent = 'Your score:' + playerScore;
    scoresC.textContent = 'Computer score:' + computerScore;
    winStatus.textContent = winner;
    if(playerScore === 5 || computerScore === 5){
        endGame();
    }

}
function endGame(){
    if(playerScore > computerScore){
        winStatus.textContent = "The winner is you! The final score is " +playerScore + " to " +computerScore + ".";
    }
    else if(computerScore>playerScore){
        winStatus.textContent = "The computer is the winner. The final score is " +playerScore + " to " +computerScore + ".";
    }
    playerScore = 0;
    computerScore = 0;
    scoresP.textContent = 'Your score:' + playerScore;
    scoresC.textContent = 'Computer score:' + computerScore;
    alert("Game over!");
}









