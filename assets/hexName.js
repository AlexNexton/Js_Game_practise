//select all the elements that are needed from the body
let hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexBtn = document.querySelector('.colour-btn');
let background = document.querySelector('body');
let colourName = document.querySelector('.hex');

// add event listeners

hexBtn.addEventListener('click', getHex);

// function

function getHex(){
    let hexColour = "#";

    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*hexArray.length);
        hexColour += hexArray[random];
        //console.log(hexColour); To check the console in devtool to see if the for loop is working correctly
       
    }
     background.style.backgroundColor = hexColour;
     colourName.innerHTML = hexColour;
}