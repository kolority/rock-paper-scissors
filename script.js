function computerPlay(){
    choice = Math.floor(Math.random()*3)
    if(choice === 0){
        return "rock"
    }
    else if(choice === 1){
        return "paper"
    }
    else if(choice === 2){
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let winner;    
    if(playerSelection === computerSelection){
        winner = "It's a tie! You both picked " + playerSelection + "."
    }
    if(playerSelection === "rock" && computerSelection === "paper"){
        winner = "You lose! Paper beats rock." 
    }
    if(playerSelection === "rock" && computerSelection === "scissors"){
        winner = "You win! Rock beats scissors."
    }
    if(playerSelection === "paper" && computerSelection === "rock"){
        winner = "You win! Paper beats rock."
    }
    if(playerSelection === "paper" && computerSelection === "scissors"){
        winner ="You lose! Scissors beats paper."
    }
    if(playerSelection === "scissors" && computerSelection === "rock"){
        winner = "You lose! Rock beats scissors."
    }
    if(playerSelection === "scissors" && computerSelection === "paper"){
        winner = "You win! Scissors beats paper."
    }
    return winner
}

function game(){   
    let playerScore = 0;
    let computerScore = 0; 

    for(let gameCount = 0; gameCount< 5; gameCount++){ 
        let playerSelection = prompt("Rock, paper, or scissors?");         
        let checkWinner = playRound(playerSelection, computerPlay());
        console.log(checkWinner);
        if (checkWinner.search("win") > -1){
            playerScore++;
        }
        else if(checkWinner.search("lose") > -1){
            computerScore++;
        }
    }
    if(playerScore > computerScore){
        console.log("You win! Final score is: " +playerScore+ " to " +computerScore+ ".")
    }
    else if(playerScore < computerScore){
        console.log("You lose. Final score is: " +playerScore+ " to " +computerScore+ ".")
    }
    else{
        console.log("It was tie! Final score is: " +playerScore+ " to " +computerScore+ ".")
    }
}