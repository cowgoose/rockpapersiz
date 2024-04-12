
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
    let computerResponse = getComputerChoice();
    let playerResponse;
    let counter = 0;


    
    //base case
    do{
        playerResponse = prompt("Please type rock, paper, or scissors!").toLowerCase(); 
        
        if(playerResponse != "rock" && playerResponse !=  "paper" && playerResponse !=  "scissors"){
            alert("please put the correct choice");
            counter = 0;
        } 
    }
    while(playerResponse != "rock" && playerResponse !=  "paper" && playerResponse !=  "scissors"){

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
            counter++;
            return alert("You win! Congrats!")
        }
     
    }

}

const playerSelection = "rock";

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//restart button
const restart = document.getElementById("restart");
restart.addEventListener("click", function() {
    counter = 0;
    playRound();
});


