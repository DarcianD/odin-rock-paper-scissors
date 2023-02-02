 
 
let enterPromt = prompt("Bear, Ninja, or Hunter?"); // user input
let playerSelection = enterPromt.toUpperCase(); // turn input all into uppercase
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const choices = ['BEAR', 'HUNTER', 'NINJA']; // array [0 1 2]
    const randNum = Math.floor(Math.random()* 3);; // generate random number 0 ,1, 2
    return choices[randNum]; // choice [either 0, 1, or 2]
}

function playRound(playerSelection,computerSelection) {
    if( playerSelection === computerSelection ){
       return "tie" 
    }

    if( playerSelection === "BEAR" ){
        if( computerSelection === "NINJA")
        return "YOU WIN"
        else  return "YOU LOSE"
     }
    
     if( playerSelection === "HUNTER" ){
        if( computerSelection === "BEAR")
        return "YOU WIN"
        else  return "YOU LOSE"
     }

     if( playerSelection === "NINJA" ){
        if( computerSelection === "HUNTER")
        return "YOU WIN"
        else  return "YOU LOSE"
     }
};

console.log(playerSelection);
console.log(computerSelection);
//console.log(getComputerChoice(computerSelection));
console.log(playRound(playerSelection,computerSelection));


