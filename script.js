'use strict'

// Selecting elements

const btnNew = document.querySelector('.btn-new');
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const playerImage = document.querySelector('.player-img');
const computerImage = document.querySelector('.computer-img');
const playerEl = document.querySelector('.player');
const computerEl = document.querySelector('.computer');
const playerScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');
const displayText = document.querySelector('.result-txt');

let player, comp, playing, chance;

const init = function () {
    player = 0;
    comp = 0;
    playing = true;

    displayText.textContent = `Select an option`;
    displayText.classList.remove('bold');
    compScore.textContent = 0;
    playerScore.textContent = 0;

    playerImage.src = "images/question-mark.jpeg";
    computerImage.src = "images/question-mark.jpeg";

    computerEl.style.backgroundColor='#343434';
    playerEl.style.backgroundColor='#343434';
}

init();

// const randomNum = function () {
//     return Math.trunc(Math.random() * 3) + 1;
// }

const outcome = function (per, com) {
    // let com = Math.trunc(Math.random() * 3) + 1;
    if (per === com) {
        return 0;
    }
    else if (per === 1 && com === 2) {
        return -1;
    }
    else if (per === 1 && com === 3) {
        return 1;
    }
    else if (per === 2 && com === 1) {
        return 1;
    }
    else if (per === 2 && com === 3) {
        return -1;
    }
    else if (per === 3 && com === 1) {
        return -1;
    }
    else if (per === 3 && com === 2) {
        return 1;
    }
}

//selecting rock
btnRock.addEventListener('click', function () {
    if (playing) {
        let rand = Math.trunc(Math.random() * 3) + 1;
        playerImage.src = "images/img-1.png";
        computerImage.src = `images/img-${rand}.png`;
        let out = outcome(1, rand);
        if (out === -1) {
            comp++;
            displayText.textContent = "Computer Wins";
            compScore.textContent = comp;
            if (comp >= 5) {
                playing = false;
                computerEl.style.backgroundColor='#00a86b';
                displayText.classList.add('bold')
                displayText.textContent='Game Over , you lose'
            }
        }
        else if(out===1){
            player++;
            displayText.textContent='Player Wins'
            playerScore.textContent=player;
            if(player>=5)
            {
                playing=false;
                playerEl.style.backgroundColor='#00a86b';
                displayText.classList.add('bold')
                displayText.textContent='Congrats  , you win';
            }
        }
        else{
            displayText.textContent='Draw';
        }
    }
})

//selecting paper
btnPaper.addEventListener('click',function () {
    if (playing) {
        let rand = Math.trunc(Math.random() * 3) + 1;
        playerImage.src = "images/img-2.png";
        computerImage.src = `images/img-${rand}.png`;
        let out = outcome(2, rand);
        if (out === -1) {
            comp++;
            displayText.textContent = "Computer Wins";
            compScore.textContent = comp;
            if (comp >= 5) {
                playing = false;
                computerEl.style.backgroundColor='#00a86b';
                displayText.classList.add('bold')
                displayText.textContent='Game Over , you lose'
            }
        }
        else if(out===1){
            player++;
            displayText.textContent='Player Wins'
            playerScore.textContent=player;
            if(player>=5)
            {
                playing=false;
                playerEl.style.backgroundColor='#00a86b';
                displayText.classList.add('bold')
                displayText.textContent='Congrats  , you win';
            }
        }
        else{
            displayText.textContent='Draw';
        }
    }
})

//selecting scissors
btnScissors.addEventListener('click',function () {
    if (playing) {
        let rand = Math.trunc(Math.random() * 3) + 1;
        playerImage.src = "images/img-3.png";
        computerImage.src = `images/img-${rand}.png`;
        let out = outcome(3, rand);
        if (out === -1) {
            comp++;
            displayText.textContent = "Computer Wins";
            compScore.textContent = comp;
            if (comp >= 5) {
                playing = false;
                computerEl.style.backgroundColor='#00a86b';
                displayText.classList.add('bold')
                displayText.textContent='Game Over , you lose'
            }
        }
        else if(out===1){
            player++;
            displayText.textContent='Player Wins'
            playerScore.textContent=player;
            if(player>=5)
            {
                playing=false;
                playerEl.style.backgroundColor='#00a86b';
                displayText.classList.add('bold')
                displayText.textContent='Congrats  , you win';
            }
        }
        else{
            displayText.textContent='Draw';
        }
    }
})

btnNew.addEventListener('click',init);
