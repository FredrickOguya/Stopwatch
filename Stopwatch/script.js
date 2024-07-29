/*// Write JavaScript code here

const startStopButton = document.getElementById('startStop');
const stopButton = document.getElementById('reset')
let isRunning = false;
let second = 58;
let minutes = 0;
let hours = 0;
let text = document.getElementById('stopwatch')
let writing;

function secondTextHtml (){
    second+=1
    if (second<10){
        textHtml = `0${hours}:0${minutes}:0${second}`
        text.textContent = textHtml
        
    }else if(second>9 && second< 60){
    
        textHtml = `00:00:${second}`
        text.textContent = textHtml
    } else if(second >59){
        second=0
        minutes+=1
    }
}
function addSeconds(){
    secondText += 1

}

startStopButton.addEventListener('click',()=>{
    if (isRunning){
        startStopButton.textContent= 'Start'
        clearInterval(writing)
    } else{
        startStopButton.textContent= 'Stop'
         writing = setInterval(secondTextHtml,1000)
        
    }
    isRunning = !isRunning;
 
})
    */

// Write JavaScript code here

const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset')
let isRunning = false;
let second = 0;
let text = document.getElementById('stopwatch')
let writing;

function secondTextHtml (){
    second+=1
    if (second<10){
        textHtml = `00:00:0${second}`
        text.textContent = textHtml
        
    } else{
    
        textHtml = `00:00:${second}`
        text.textContent = textHtml
    }
}
function addSeconds(){
    secondText += 1

}

startStopButton.addEventListener('click',()=>{
    if (isRunning){
        startStopButton.textContent= 'Start'
        clearInterval(writing)
    } else{
        startStopButton.textContent= 'Stop'
         writing = setInterval(secondTextHtml,1000)
        
    }
    isRunning = !isRunning
 
})
resetButton.addEventListener('click',()=>{
    second = 0
    text.textContent = `00:00:00`
    clearInterval(writing)
    startStopButton.textContent = 'Start'
    isRunning = !isRunning;
})