const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonPlus = document.querySelector(".plus")
const buttonLess = document.querySelector(".less")
const buttonForest = document.querySelector(".forest")
const buttonRain = document.querySelector(".rain")
const buttonVoices = document.querySelector(".voices")
const buttonFlame = document.querySelector(".flame")
const iconForest = document.querySelector(".forest > svg")
const iconRain = document.querySelector(".rain > svg")
const iconVoices = document.querySelector(".voices > svg")
const iconFlame = document.querySelector(".flame > svg")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const buttonLight = document.querySelector(".light-mode")
const buttonDark = document.querySelector(".dark-mode")
const body = document.querySelector("body")
const buttons = document.querySelectorAll(".container svg")
const numbers = document.querySelectorAll("span")
const volForest = document.getElementById("volume-forest")
const volRain = document.getElementById("volume-rain") 
const volVoices = document.getElementById("volume-voices") 
const volFlame = document.getElementById("volume-flame") 
const volBar = document.querySelectorAll("input")

export {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonLess,
    buttonForest,
    buttonRain,
    buttonVoices,
    buttonFlame,
    iconForest,
    iconRain,
    iconVoices,
    iconFlame,
    minutesDisplay,
    secondsDisplay,
    buttonLight,
    buttonDark,
    body,
    buttons,
    numbers,
    volForest,
    volRain,
    volVoices,
    volFlame,
    volBar
}
