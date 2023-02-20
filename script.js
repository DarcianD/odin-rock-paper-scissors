const bear = document.getElementById("bear");
const hunter = document.getElementById("hunter");
const ninja = document.getElementById("ninja");
const playerScoreText = document.getElementById("playerScore")
const computerScoreText = document.getElementById("computerScore")
let statementText = document.getElementById("statement");
let playerScore = 0;
let computerScore = 0;

// this trigger first
    function getPlayerChoice(){  // player click on one of three options
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

// trigger third because of the game() function;
    function getComputerChoice() {
            const compChoices = ['BEAR', 'HUNTER', 'NINJA']; // array [0 1 2]
            const randNum = Math.floor(Math.random()* 3);; // generate random number 0 ,1, 2
            return compChoices[randNum]; // choice [either 0, 1, or 2]
        }


// trigger second; compare the player selection vs computer 
    function game(playerSelection){
        const computerSelection = getComputerChoice();
        if( playerSelection === computerSelection ){
            draw();
            } else if( playerSelection === "BEAR" ){
                if( computerSelection === "NINJA")
                return win();
                else return lose();
            } else if( playerSelection === "HUNTER" ){
                if( computerSelection === "BEAR")
                return win();
                else return lose();
            } else if( playerSelection === "NINJA" ){
                if( computerSelection === "HUNTER")
                return win();
                else return lose();
            }


// trigger fourth; changes the statement    
    function draw(){
        statementText.innerHTML = "IT'S A TIE";
    }

 // trigger fourth;changes the statement       
    function win(){ 
        playerScore++;
        statementText.innerHTML = "YOU WIN! " + playerSelection + " KILL " + computerSelection;
        playerScoreText.innerHTML = "Player Score: " + playerScore;
        reset(); 
    }

// trigger fourth; changes the statement    
    function lose(){
        computerScore++;
        statementText.innerHTML = "YOU LOSE! " + computerSelection + " KILL " + playerSelection;
        computerScoreText.innerHTML = "Computer Score: " + computerScore;
        reset(); 
    }

// trigger fifth; reset the player and computer score
    function reset(){
        if (playerScore == 5){
          statementText.innerHTML = "GAME END! YOU WON! KEEP PLAYING IF YOU WANT " ;
          playerScore = 0;
          computerScore =0;
          playerScoreText.innerHTML = "Player Score: " + playerScore;
          computerScoreText.innerHTML = "Computer Score: " + computerScore; 
        } else if(computerScore == 5){
           statementText.innerHTML = "GAME END! YOU LOST! KEEP PLAYING IF YOU WANT " ;
            playerScore = 0;
            computerScore =0;
            playerScoreText.innerHTML = "Player Score: " + playerScore;
            computerScoreText.innerHTML = "Computer Score: " + computerScore; 
        }}};

    getPlayerChoice();
