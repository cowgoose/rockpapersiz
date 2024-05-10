
//computer output
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3); //will either be 0, 1 , 2
    let word;
    if(choice == 0){
        word = "rock";
    }
    if(choice == 1){
        word = "scissors"
    }
    if(choice == 2){
        word = "paper";
    }
    
    return word;
}

function message(mes){
    const result = document.querySelector("#result");
    result.textContent = mes;
}

function showScore(){
    const pscore = document.querySelector('#score');
    const cscore = document.querySelector('#cscore');
    pscore.textContent = 'player score : ' + playerscore;
    cscore.textContent = 'computer score : ' +  compscore;
}

function winCondition(mes){
    const win = document.querySelector("#win");
    if(playerscore == 5){
        playerscore = 0;
        compscore = 0;
        win.textContent = 'you win'
        window = true;
    }
    else if(compscore == 5){
        playerscore = 0;
        compscore = 0;
        win.textContent = 'you lose'
        window = true; 
    }
    else if(playerscore < 5 && compscore < 5) {  
        win.textContent = '';
    }
}

let compscore = 0;
let playerscore = 0;

//game 
function playRound(playerChoice, computerChoice){

    if(playerChoice == computerChoice){
        message("It's a tie!");
        
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        compscore++;
        message("computer wins with paper!");
    }
    else if(playerChoice == "paper" && computerChoice == "scissors"){
        compscore++;
        message("computer wins with scissors!");
    }
    else if(playerChoice == "scissors" && computerChoice == "rock"){
        compscore++;
        message("computer wins with rock!");
    }
    else{
        playerscore++;
        message("You win this round!");
    }
    
    showScore();
    winCondition();
     
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.onclick = () => playRound("rock", getComputerChoice());
paper.onclick = () => playRound("paper", getComputerChoice());
scissors.onclick = () => playRound("scissors", getComputerChoice());







