function game(){


    for(let i =0; i < 5; i++){

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
                        return "IT'S A TIE!" 
                        }

                        if( playerSelection === "BEAR" ){
                            if( computerSelection === "NINJA")
                            return "YOU WIN! BEAR EAT NINJA"
                            else  return "YOU LOSE! HUNTER SHOOT BEAR"
                        }
                        
                        if( playerSelection === "HUNTER" ){
                            if( computerSelection === "BEAR")
                            return "YOU WIN! HUNTER SHOOT BEAR"
                            else  return "YOU LOSE! NINJA KILL HUNTER"
                        }

                        if( playerSelection === "NINJA" ){
                            if( computerSelection === "HUNTER")
                            return "YOU WIN! NINJA KILL HUNTER"
                            else  return "YOU LOSE! BEAR EAT NINJA"
                        }
                    };

console.log(playerSelection);
console.log(computerSelection);
//console.log(getComputerChoice(computerSelection));
console.log(playRound(playerSelection,computerSelection));        
}
}
console.log(game());












