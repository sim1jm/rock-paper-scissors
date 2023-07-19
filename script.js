//Coded by Simmone, June 13 2023
'use strict'

let playerWin = 0;
let computerWin = 0;

const divResult = document.querySelector('div.result');
const divScore = document.querySelector('div.score');
const divWinner = document.querySelector('div.winner');

const buttonRock = document.querySelector('button#Rock');
const buttonPaper = document.querySelector('button#Paper');
const buttonScissors = document.querySelector('button#Scissors');

buttonRock.addEventListener('click', () => playRound('Rock', getComputerChoice()));
buttonPaper.addEventListener('click', () => playRound('Paper', getComputerChoice()));
buttonScissors.addEventListener('click', () => playRound('Scissors', getComputerChoice()));

function getComputerChoice() { //take random num from 0-2 and associate it with rock, paper, or, scissors
    const randomNumber = Math.floor(Math.random()* 3);
    let computerSelection;

    switch (randomNumber) {
        case 0:
            computerSelection = 'Rock';
            break;
        case 1:
            computerSelection = 'Paper';
            break;
        case 2:
            computerSelection = 'Scissors';
            break;
        default:
            computerSelection = null;
            break;
    }
    return computerSelection;
} 

function playRound(playerSelection, computerSelection) { //Play one round of rps
    if (playerSelection === computerSelection) {
        divResult.textContent = `It's a tie! You both chose ${playerSelection}.`;
    } 
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerWin++;
        divResult.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
    } 
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Scissors' ||
    playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerWin++;
        divResult.textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
    } 
    else { 
        divResult.textContent = 'ERROR!';
    } 

    divScore.textContent = `${playerWin}-${computerWin}`;

    if (playerWin === 5) {
        divWinner.textContent = `You won!`;
        playerWin = 0;
        computerWin = 0;
    } else if (computerWin == 5) {
        divWinner.textContent = `The computer won with!`;
        playerWin = 0;
        computerWin = 0;
    } else {
        divWinner.textContent = '';
    }
} 