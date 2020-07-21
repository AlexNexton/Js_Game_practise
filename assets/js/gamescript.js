class AudioController{ // adding the audio for the game and the card sounds
    constructor(){
            this.backgroundMusic = new Audio('assets/audio/Star Wars Cantina Band (Noize Tank Remix) - Gaming Background Music (HD).mp3');
            this.flipSound =  new Audio('assets/audio/flip.wav');
            this.matchSound =  new Audio('assets/audio/match.wav');
            this.victorySound =  new Audio('assets/audio/victory.wav');
            this.gameOverSound = new Audio('assets/audio/gameover.wav');
            this.backgroundMusic.volume = 0.5;
            this.backgroundMusic.loop = true;

    }
    startMusic(){
        this.backgroundMusic.play();
    }
}

function ready(){
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click',() =>{
            overlay.classList.remove('vis');
            // game.startGame();
            let audioController = new AudioController();
            audioController.startMusic();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () =>{
            //game.flipCard(card);
        });
    });
} 


if(document.readyState === 'loading'){
 document.addEventListener('DOMContentLoaded', ready()); //loads script once the html has finished loading.
}else{
    ready(); //else call it anyway assumming it's already loaded
}


