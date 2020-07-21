
let colourBtn = document.querySelector('.colour-btn');
let bodyBackground = document.querySelector('body');

let colours =['#008000', 'red', 'blue', 'yellow'];


// event listener

colourBtn.addEventListener('click', changeColour);

//call back function for event listener

function changeColour(){

    // bodyBackground.style.backgroundColor = colours[i];

    let random = Math.floor(Math.random()*colours.length);
    bodyBackground.style.backgroundColor = colours[random];
        
    
}