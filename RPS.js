function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    let text = "";

    if(choice == 0){
        text = "Computer chooses Rock";
    }
    if(choice == 1){
        text = "Computer chooses Paper";
    }
    if (choice == 2){
        text = "Computer chooses Scissors";
    }
    return text;
}

function getHumanChoice(){
    let userInput = prompt("0 = Rock, 1 = Paper, 2 = Scissors", "Choose an option").toLowerCase();

    let text = "";

    if(userInput == 0){
        text = "You have chosen Rock";
    }
    else if(userInput == 1){
        text = "You have chosen Paper";
    }
    else if(userInput == 2){
        text = "You have chosen Scissors";
    }
    else{
        text = "Choose a valid option";
    }
    return text;
}




