//Coded by Simmone, June 13 2023
'use strict'

function getComputerChoice() { //Take random num from 0-2 and associate it with rock, paper, or, scissor
    let randomNumber = Math.floor(Math.random()* 3);
    let computerSelection

    switch (randomNumber) {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'paper';
            break;
        case 2:
            computerSelection = 'scissors';
            break;
        default:
            computerSelection = null;
            break;
    }
    
    return computerSelection;
} 

let playerWin = 0; //Store score of player and computer
let computerWin = 0; //Global because playRound() will modify value and game() will determine win

function playRound(playerSelection, computerSelection) { //Play one round of rps
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}.`;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWin++;
        return `You won! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWin++;
        return `You lost! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    } 
    else { 
        return 'ERROR! You did not choose rock, paper, or scissors!';
    } 
} 

function game() { //Play whole game of rps to 5, access playRound()
    for (let i = 1; i <= 5; i++) {
    console.log(playRound(prompt('Will you choose rock, paper, or scissors?').toLowerCase(), getComputerChoice()));
    }

    if (playerWin > computerWin) {
        alert(`Congratulations! You won the game with a score of ${playerWin}-${computerWin}.`);
    } 
    else if (playerWin < computerWin) {
        alert(`Oh no! You lost the game with a score of ${playerWin}-${computerWin}.`);
    } 
    else if (playerWin === computerWin) {
        alert(`Nice try! You and the computer tied with a score of ${playerWin}-${computerWin}`);
    } 
    else {
        alert('ERROR! Something went wrong.');
    }

    playerWin = 0; //Reset player and comp win for future games
    computerWin = 0;
}
