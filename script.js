let activePlayer = 0;
let roundScore = 0;
let score = [0,0];

// Select Elements

let dice , roll_dice , current_0 , current_1 , player_1 , player_2;

dice        = document.querySelector('.dice');
roll_dice   = document.querySelector('.roll_dice');
player_0    = document.querySelector('.player_0');
player_1    = document.querySelector('.player_1');
hold        = document.querySelector('.hold');


// Roll Dice 

roll_dice.addEventListener('click',randomDice)

// Random dice function

function randomDice(){
    var randomNum = Math.ceil(Math.random() * 6);
    dice.setAttribute('src',`./dice-${randomNum}.png`);

    if(randomNum !== 1){
        roundScore += randomNum;
        document.querySelector(`.player_${activePlayer} .current`).textContent = roundScore;
        dice.style.display = 'block';


    }else{
        turnPlayer()
    }
}

// turn player

function turnPlayer(){
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector(`.player_${activePlayer} .current`).textContent = roundScore;
    dice.style.display = 'none';

    if(activePlayer == 1){
        player_1.classList.toggle('active');
        player_0.classList.toggle('active')

    }else if(activePlayer == 0){
        player_1.classList.toggle('active');
        player_0.classList.toggle('active');
    }
}

// Hold Data 

hold.addEventListener('click',holdData)

function holdData(){
    score[activePlayer] += roundScore;
    roundScore = 0;
    document.querySelector(`.player_${activePlayer} .current`).textContent = 0;
    document.querySelector(`.player_${activePlayer} .player_score`).textContent = score[activePlayer];
    turnPlayer();

    if(score[0] >= 50){
        alert("Player number one win")
    }else if(score[1] >= 50){
        alert("Player number Two win")
    }
}
