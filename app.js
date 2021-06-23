let playerName = prompt("Introduce tu nombre")

const playAgainBtn = document.querySelector('.playAgain')
let playerPoints = 0;
let computerPoints = 0;
const playerScore = document.querySelector('.playerscore')
const computerScore = document.querySelector('.computerscore')
const announcement = document.querySelector('.announcement')
const rock = document.getElementById('rockBtn')
const paper = document.getElementById('paperBtn')
const scissor = document.getElementById('scissorBtn')

let playerSelection;

const scoreTeller = document.querySelector('.scoretext')


// button to let the user restart the game
playAgainBtn.addEventListener('click', function(){
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = playerName + ": " + playerPoints;
    computerScore.textContent = "PC: " + computerPoints;
    announcement.textContent = "Consigue 5 puntos para ganar!"
    rock.className = 'btns'
    paper.className = 'btns'
    scissor.className = 'btns'
})

    rock.addEventListener('click', () => {
        playerSelection = "Rock"
        if (!isMaxScoreReached()) {
            playRound();
        } 
    })
    paper.addEventListener('click', () => {
        playerSelection = "Paper"
        if (!isMaxScoreReached()) {
            playRound();
        }
    })
    scissor.addEventListener('click', () => {
        playerSelection = "Scissor"
        if (!isMaxScoreReached()) {
            playRound();
        }
    }) 

function playRound() {

    let choices = ["Rock", "Paper", "Scissor"]
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    
    console.log("Computer" + computerSelection);
    console.log("User" + playerSelection);

    if(playerSelection == "Rock" && computerSelection == "Paper") {
        computerPoints++;
        scoreTeller.textContent = "Papel gana a piedra, gana el PC!"
    } else if (playerSelection == "Rock" && computerSelection == "Scissor") {
        playerPoints++;
        scoreTeller.textContent = "Piedra gana a papel, " + playerName + " Gana!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissor") {
        computerPoints++;
        scoreTeller.textContent = "Tijera gana a papel, gana el PC!!"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerPoints++;
        scoreTeller.textContent = "Piedra gana a papel " + playerName + " Gana!"
    } else if (playerSelection == "Scissor" && computerSelection == "Rock") {
        computerPoints++;
        scoreTeller.textContent = "Piedra gana a papel, gana el PC!!"
    } else if (playerSelection == "Scissor" && computerSelection == "Paper") {
        playerPoints++;
        scoreTeller.textContent = "Tijera gana a papel, " + playerName + " Gana!"
    } else {
        scoreTeller.textContent = "Draw!"
    }

    playerScore.textContent = playerName + ": " + playerPoints;
    computerScore.textContent = "PC: " + computerPoints;

    if(playerPoints == 5) {
        announcement.textContent = playerName + " Gana!!"
        disableTheButtons()
    } else if(computerPoints == 5) {
        announcement.textContent = "gana el PC!!"
        disableTheButtons()
    }
}

function disableTheButtons() {
    announcement.textContent = "Reiniciar juego"
    rock.className = 'disabledBtns'
    paper.className = 'disabledBtns'
    scissor.className = 'disabledBtns'
}

function isMaxScoreReached() {
    // disable button, score limit reached
    if (playerPoints === 5 || computerPoints === 5) {
        return true
    } 
    return false
}