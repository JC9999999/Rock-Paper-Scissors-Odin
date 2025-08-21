

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if(choice == 0){
        return 0;
    }
    else if(choice == 1){
        return 1;
    }
    else if (choice == 2){
        return 2;
    }
}

function getHumanChoice(){
    let input = prompt("0 = Rock, 1 = Paper, 2 = Scissors", "Choose an option");
    
    if(input == 0){
        return 0;
    }
    else if(input == 1){
        return 1;
    }
    else if(input == 2){
        return 2;
    }    
}

function playRounds(humanChoice, computerChoice){
 
    // 0 = rock, 1 = paper, 2 = scissor
    if(humanChoice === 0 && computerChoice === 2 || humanChoice === 1 && computerChoice === 0 || humanChoice === 2 && computerChoice === 1){
        return "You win";
    }
    else if(humanChoice === 0 && computerChoice === 1 || humanChoice === 1 && computerChoice === 2 || humanChoice === 2 && computerChoice === 0){
        return "You lose";
    }
    else if(humanChoice === computerChoice){
        return "It's a Tie";
    }
}

function playGame(){
    //code for prompting user input for the amount of rounds user wants
    // numRounds = user input
    //roundsPlayed = rounds counter
    let numRounds = prompt("Enter the number of rounds that you want to play", "");
    let roundsPlayed = 0;
    while(roundsPlayed<numRounds){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRounds(humanChoice, computerChoice);

        let humanText = "";
        if(humanChoice === 0){
            humanText = "Rock";
        }
        if (humanChoice === 1){
            humanText = "Paper";
        }
        if (humanChoice === 2){
            humanText = "Scissors";
        }
        let computerText = "";
        if(computerChoice === 0){
            computerText = "Rock";
        }
        if (computerChoice === 1){
            computerText = "Paper";
        }
        if (computerChoice === 2){
            computerText = "Scissors";
        }
        console.log("You have chosen" + humanText);
        console.log("Computer has chosen" + computerText);
        console.log(result);

        roundsPlayed++;
    }

}

playGame();







