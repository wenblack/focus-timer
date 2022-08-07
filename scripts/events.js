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

export default function ({ controller, timer, sounds }) {
    buttonForest.addEventListener('click', () => {
        controller.playPauseForest()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })

    buttonRain.addEventListener('click', () => {
        controller.playPauseRain()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })

    buttonVoices.addEventListener('click', () => {
        controller.playPauseVoices()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })
    
    buttonFlame.addEventListener('click', () => {
        controller.playPauseFlame()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })

    buttonPlay.addEventListener('click', () => {
        sounds.pressButton()
        timer.countdown()
        controller.play()
    })

    buttonPause.addEventListener('click', () => {
        sounds.pressButton()
        controller.play()
        timer.hold()
    })
    
    buttonStop.addEventListener('click', () => {
        sounds.pressButton()
        timer.reset()
        controller.stop()
    })

    buttonPlus.addEventListener('click', () => {
        let newMinutes = controller.plusMinutes()
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
        sounds.pressButton()
        timer.reset()
    })

    buttonLess.addEventListener('click', () => {
        let newMinutes = controller.lessMinutes()
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
        sounds.pressButton()
        timer.reset()
    })

    buttonLight.addEventListener("click", () => {
        controller.darkMode()
    })
    
    buttonDark.addEventListener("click", () => {
        controller.lightMode()
    })

    volForest.addEventListener("change", () => {
        sounds.rangeForest()
        controller.rangeForest()
    })
    
    volRain.addEventListener("change", () => {
        sounds.rangeRain()
        controller.rangeRain()
    })
    
    volVoices.addEventListener("change", () => {
        sounds.rangeVoices()
        controller.rangeVoices()
    })
    
    volFlame.addEventListener("change", () => {
        sounds.rangeFlame()
        controller.rangeFlame()
    })

}
