

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
        return "It's a tie";
    }
}

function convertToText(choice){
    if (choice === 0){
        return "Rock";
    }
    if (choice === 1){
        return "Paper";
    }
    if (choice === 2){
        return "Scissor";
    }
}

function playGame(){
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissor = document.createElement("button");

    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissor.textContent = "Scissor";

    const displayResult = document.createElement("div");
    document.body.appendChild(rock);
    document.body.appendChild(paper);
    document.body.appendChild(scissor);
    document.body.appendChild(displayResult);

    let humanWins = 0;
    let computerWins = 0;
    let ties = 0;
    rock.addEventListener("click", function(e){
        //link 0 to the button so that when the button is clicked on, it will tell player what the computer chose and whether the player won the round or not
        const humanChoice = 0;
        let computerChoice = getComputerChoice();
        let result = playRounds(humanChoice, computerChoice);

        displayResult.textContent = "Computer has chosen " + convertToText(computerChoice) + ". " + result + ".";

        if (result === "You win"){
            humanWins++;
        }else if(result === "You lose"){
            computerWins++;
        }else{
            ties++;
        }
        displayResult.textContent += "\nWins: " + humanWins + "\nLosses: " + computerWins + "\nTies: " + ties;
    })
    paper.addEventListener("click", function(e){
        const humanChoice = 1;
        let computerChoice = getComputerChoice();
        let result = playRounds(humanChoice, computerChoice);
        displayResult.textContent = "Computer has chosen " + convertToText(computerChoice) + ". " + result + ". ";

        if (result === "You win"){
            humanWins++;
        }else if(result === "You lose"){
            computerWins++;
        }else{
            ties++;
        }
        displayResult.textContent += "\nWins: " + humanWins + "\nLosses: " + computerWins + "\nTies: " + ties;

    })
    scissor.addEventListener("click", function(e){
        const humanChoice = 2;
        let computerChoice = getComputerChoice();
        let result = playRounds(humanChoice, computerChoice);
        displayResult.textContent = "Computer has chosen " + convertToText(computerChoice) + ". " + result + ". ";

        if (result === "You win"){
            humanWins++;
        }else if(result === "You lose"){
            computerWins++;
        }else{
            ties++;
        }
        displayResult.textContent += "\nWins: " + humanWins + "\nLosses: " + computerWins + "\nTies: " + ties;
    })
}
playGame();
