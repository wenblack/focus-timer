import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonLess,
    buttonForest,
    buttonRain,
    buttonVoices,
    buttonFlame,
    buttonLight,
    buttonDark,
    volForest,
    volRain,
    volVoices,
    volFlame 
} from "./elements.js"

export default function ({ controler, timer, sounds }) {
    buttonForest.addEventListener('click', () => {
        controler.playPauseForest()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })

    buttonRain.addEventListener('click', () => {
        controler.playPauseRain()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })

    buttonVoices.addEventListener('click', () => {
        controler.playPauseVoices()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })
    
    buttonFlame.addEventListener('click', () => {
        controler.playPauseFlame()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })

    buttonPlay.addEventListener('click', () => {
        sounds.pressButton()
        timer.countdown()
        controler.play()
    })

    buttonPause.addEventListener('click', () => {
        sounds.pressButton()
        controler.play()
        timer.hold()
    })
    
    buttonStop.addEventListener('click', () => {
        sounds.pressButton()
        timer.reset()
        controler.stop()
    })

    buttonPlus.addEventListener('click', () => {
        let newMinutes = controler.plusMinutes()
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
        sounds.pressButton()
        timer.reset()
    })

    buttonLess.addEventListener('click', () => {
        let newMinutes = controler.lessMinutes()
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
        sounds.pressButton()
        timer.reset()
    })

    buttonLight.addEventListener("click", () => {
        controler.darkMode()
    })
    
    buttonDark.addEventListener("click", () => {
        controler.lightMode()
    })

    volForest.addEventListener("change", () => {
        sounds.rangeForest()
        controler.rangeForest()
    })
    
    volRain.addEventListener("change", () => {
        sounds.rangeRain()
        controler.rangeRain()
    })
    
    volVoices.addEventListener("change", () => {
        sounds.rangeVoices()
        controler.rangeVoices()
    })
    
    volFlame.addEventListener("change", () => {
        sounds.rangeFlame()
        controler.rangeFlame()
    })

}
