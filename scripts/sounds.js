import { 
    buttonFlame, 
    buttonForest, 
    buttonRain, 
    buttonVoices,
    volForest,
    volRain,
    volVoices,
    volFlame 
} from "./elements.js"

export default function () {
    const buttonPressAudio =new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer =new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const forestAudio =new Audio("./sounds/Floresta.wav")
    const rainAudio =new Audio("./sounds/Chuva.wav")
    const voicesAudio =new Audio("./sounds/Cafeteria.wav")
    const flameAudio =new Audio("./sounds/Lareira.wav")
    
    forestAudio.loop = true
    rainAudio.loop = true
    voicesAudio.loop = true
    flameAudio.loop = true
    
    function pressButton() {
        buttonPressAudio.play();
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function rangeForest() {
        forestAudio.volume = volForest.value
        volRain.value = 0
        volVoices.value = 0
        volFlame.value = 0
        forestAudio.play()
        rainAudio.pause()
        voicesAudio.pause()
        flameAudio.pause()
    }
    
    function rangeRain() {
        rainAudio.volume = volRain.value
        volForest.value = 0
        volVoices.value = 0
        volFlame.value = 0    
        rainAudio.play()
        forestAudio.pause()
        voicesAudio.pause()
        flameAudio.pause()
    }
    
    function rangeVoices() {
        voicesAudio.volume = volVoices.value
        volForest.value = 0
        volRain.value = 0
        volFlame.value = 0 
        voicesAudio.play()
        forestAudio.pause()
        rainAudio.pause()
        flameAudio.pause()
    }
    
    function rangeFlame() {
        flameAudio.volume = volFlame.value
        volForest.value = 0
        volRain.value = 0
        volVoices.value = 0
        flameAudio.play()
        forestAudio.pause()
        rainAudio.pause()
        voicesAudio.pause()
    }
    
    function forestOnOff() {
        if (buttonForest.classList.contains("on")) {
            forestAudio.play()
            volForest.value = 0.5
        } else {
            forestAudio.pause()
            volForest.value = 0
        }
    }

    function rainOnOff() {
        if (buttonRain.classList.contains("on")) {
            rainAudio.play()
            volRain.value = 0.5
        } else {
            rainAudio.pause()
            volRain.value = 0
        }
    }    

    function voicesOnOff() {
        if (buttonVoices.classList.contains("on")) {
            voicesAudio.play()
            volVoices.value = 0.5
        } else {
            voicesAudio.pause()
            volVoices.value = 0
        }
    }
    
    function flameOnOff() {
        if (buttonFlame.classList.contains("on")) {
            flameAudio.play()
            volFlame.value = 0.5
        } else {
            flameAudio.pause()
            volFlame.value = 0
        }
    }  

    return {
        pressButton,
        timeEnd,
        forestOnOff,
        rainOnOff,
        voicesOnOff, 
        flameOnOff,
        rangeForest,
        rangeRain,
        rangeVoices,
        rangeFlame
    }
}

