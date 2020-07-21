//---------------------------Start of Audion controller class------------------------------------------------------

class AudioController{ // adding the audio for the game and the card sounds
    constructor(){
            this.backgroundMusic = new Audio('assets/audio/Star Wars Cantina Band (Noize Tank Remix) - Gaming Background Music (HD).mp3');
            this.flipSound =  new Audio('assets/audio/flip.wav');
            this.matchSound =  new Audio('assets/audio/match.wav');
            this.victorySound =  new Audio('assets/audio/victory.wav');
            this.gameOverSound = new Audio('assets/audio/gameover.wav');
            this.backgroundMusic.volume = 0.5;
            this.backgroundMusic.loop = true;

    } // functions to be called for the cards and background music
    startMusic(){
        this.backgroundMusic.play();
    }
    stopMusic(){
        this.backgroundMusic.pause();
        this.backgroundMusic.currentTime = 0;
    }
    flip(){
        this.flipSound.play();
    }
    match(){
        this.matchSound.play();
    }
    victory(){
        this.stopMusic(); //stops background music once the game is complete
        this.victorySound.play();
    }
    gameOver(){
        this.stopMusic();
        this.gameOverSound.play();
    }

}
//---------------------------end of Audion controller class------------------------------------------------------

//---------------------------Start of mix or Match class------------------------------------------------------

class MixorMatch{
    constructor(totalTime, cards){
            this.cardsArray = cards;
            this.totalTime = totalTime;
            this.timeRemanining = totalTime;
            this.timer = document.getElementById('time-remaining');
            this.ticker = document.getElementById('flips');
            this.audioController = new AudioController();
    }
    startGame(){
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemanining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
    }
    flipCard(card){
        if(this.canFlipCard(card)){
            this.audioController.flip();
            this.totalClicks++; // counts eachtime the cards are clicked
            this.ticker.innerText = this.totalClicks;
            card.classList.add('vis'); //flips the cards using class using class I created in html
        }
    }
    canFlipCard(card){ // if all three of these statements are false then this will return true
        return true; // to see the card flipping for now
        //return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

//---------------------------end of mix or match class------------------------------------------------------
function ready(){
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixorMatch(100, cards); // instance for card game #1

    overlays.forEach(overlay => {
        overlay.addEventListener('click',() =>{
            overlay.classList.remove('vis');
             game.startGame(); //starts the game #1
            /*let audioController = new AudioController();
            audioController.startMusic(); */
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () =>{
            game.flipCard(card); //flips a card #1
        });
    });
} 


if(document.readyState === 'loading'){
 document.addEventListener('DOMContentLoaded', ready()); //loads script once the html has finished loading.
}else{
    ready(); //else call it anyway assumming it's already loaded
}


