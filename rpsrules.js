
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

//game 
function playRound(playerChoice, computerChoice){
    let playerResponse = prompt("Please type rock, paper, or scissors!").toLowerCase();
    let computerResponse = getComputerChoice();

    //base case
    if(playerResponse != "rock" || "paper" || "scissors"){
        alert("Please type in the correct format.");
        playerResponse = prompt("Please type rock, paper, or scissors!").toLowerCase();
    }

    if(playerResponse == computerResponse){
        console.log("Try again");
        return alert("A tie! Try again");
    
    }
    else if(playerResponse == "rock" && computerResponse == "paper"){
        console.log("rockpaper");
        return alert("Computer Wins!")
    }
    else if(playerResponse == "paper" && computerResponse == "scissors"){
        console.log("paperscissors");
        return alert("Computer Wins!")
    }
    else if(playerResponse == "scissors" && computerResponse == "rock"){
        console.log("scissorsrock");
        return alert("Computer Wins!")
    }
    else{
        console.log("otherwin");
        return alert("You win! Congrats!")
    }

}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));