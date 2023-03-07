const trafficLightGreen = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightRed.style.background = ('black');
    trafficLightGreen.style.background = ('Green');
    trafficLightGreen.removeEventListener('click', makeGreen);
    trafficLightGreen.addEventListener('click', makeYellow);
    trafficLightYellow.removeEventListener('click', makeGreen);
    trafficLightYellow.addEventListener('click', makeYellow);
    trafficLightRed.removeEventListener('click',makeGreen);
    trafficLightRed.addEventListener('click', makeYellow);
    
}
trafficLightGreen.addEventListener('click',makeGreen);

const trafficLightYellow = document.querySelector('#Yellow');

function makeYellow(){
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.style.background = ('yellow');
    trafficLightYellow.removeEventListener('click', makeYellow);
    trafficLightYellow.addEventListener('click', makeRed);
    trafficLightGreen.removeEventListener('click',makeYellow);
    trafficLightGreen.addEventListener('click', makeRed);
    trafficLightRed.removeEventListener('click', makeYellow);
    trafficLightRed.addEventListener('click', makeRed);
}
const trafficLightRed = document.querySelector('#Green');

function makeRed(){
    trafficLightYellow.style.background = ('black');
    trafficLightRed.style.background = ('Red');
    trafficLightRed.removeEventListener('click', makeRed);
    trafficLightRed.addEventListener('click', makeGreen);
    trafficLightGreen.removeEventListener('click', makeRed);
    trafficLightGreen.addEventListener('click', makeGreen);
    trafficLightYellow.removeEventListener('click', makeRed);
    trafficLightYellow.addEventListener('click', makeGreen);
}
trafficLightRed.addEventListener('click',makeGreen);
trafficLightYellow.addEventListener('click',makeGreen);