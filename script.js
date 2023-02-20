const bear = document.getElementById("bear");
const hunter = document.getElementById("hunter");
const ninja = document.getElementById("ninja");

    function getComputerChoice() {
        const compChoices = ['BEAR', 'HUNTER', 'NINJA']; // array [0 1 2]
        const randNum = Math.floor(Math.random()* 3);; // generate random number 0 ,1, 2
        return compChoices[randNum]; // choice [either 0, 1, or 2]
    }

    function getPlayerChoice(){  // activate this function output user select
        bear.addEventListener('click', function(){
            game("BEAR") 
        })
        hunter.addEventListener('click', function(){
            game("HUNTER") 
        })
        ninja.addEventListener('click', function(){
            game("NINJA") 
        })
    }

    function game(playerSelection){
        const computerSelection = getComputerChoice();
        console.log("Player Selection: " + playerSelection);
        console.log("Computer Selection: " + computerSelection);

        if( playerSelection === computerSelection ){
            console.log("UHHH IT'S A TIE")
            } else if( playerSelection === "BEAR" ){
                if( computerSelection === "NINJA")
                return console.log("BEAR EAT NINJA! YOU WIN")
                else return console.log("HUNTER SHOOT BEAR! YOU LOST!")
            } else if( playerSelection === "HUNTER" ){
                if( computerSelection === "BEAR")
                return console.log("HUNTER SHOOT BEAR! YOU WIN")
                else return console.log("NINJA KILL HUNTER! YOU LOST!")
            } else if( playerSelection === "NINJA" ){
                if( computerSelection === "HUNTER")
                return console.log("NINJA KILL HUNTER! YOU WON!")
                else return console.log("BEAR EAT NINJA! YOU LOST!")
            }

    }

    getPlayerChoice();
