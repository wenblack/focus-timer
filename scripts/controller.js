export default function({
    buttonPlay,
    buttonPause,
    buttonForest,
    buttonRain,
    buttonVoices,
    buttonFlame,
    iconForest,
    iconRain,
    iconVoices,
    iconFlame,
    minutesDisplay,
    buttonLight,
    buttonDark,
    body,
    buttons,
    numbers,
    volBar
}) {
    function play() {
        buttonPlay.classList.add("hide")
        buttonPause.classList.remove("hide")
    }

    function pause() {
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
    }

    function stop() {
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
    }

    function playPauseForest() {
        buttonForest.classList.toggle("on")
        buttonRain.classList.remove("on")
        buttonVoices.classList.remove("on")
        buttonFlame.classList.remove("on")
        
        iconForest.classList.toggle("on")
        iconRain.classList.remove("on")
        iconVoices.classList.remove("on")
        iconFlame.classList.remove("on")

        volBar[0].classList.toggle("on")
        volBar[1].classList.remove("on")
        volBar[2].classList.remove("on")
        volBar[3].classList.remove("on")
    }

    function playPauseRain() {
        buttonRain.classList.toggle("on")
        buttonForest.classList.remove("on")
        buttonVoices.classList.remove("on")
        buttonFlame.classList.remove("on")

        iconRain.classList.toggle("on")
        iconForest.classList.remove("on")
        iconVoices.classList.remove("on")
        iconFlame.classList.remove("on")

        volBar[1].classList.toggle("on")
        volBar[0].classList.remove("on")
        volBar[2].classList.remove("on")
        volBar[3].classList.remove("on")
    }

    function playPauseVoices() {
        buttonVoices.classList.toggle("on")
        buttonRain.classList.remove("on")
        buttonForest.classList.remove("on")
        buttonFlame.classList.remove("on")

        iconVoices.classList.toggle("on")
        iconRain.classList.remove("on")
        iconForest.classList.remove("on")
        iconFlame.classList.remove("on")

        volBar[2].classList.toggle("on")
        volBar[1].classList.remove("on")
        volBar[0].classList.remove("on")
        volBar[3].classList.remove("on")
    }

    function playPauseFlame() {
        buttonFlame.classList.toggle("on")
        buttonVoices.classList.remove("on")
        buttonRain.classList.remove("on")
        buttonForest.classList.remove("on")

        iconFlame.classList.toggle("on")
        iconVoices.classList.remove("on")
        iconRain.classList.remove("on")
        iconForest.classList.remove("on")

        volBar[3].classList.toggle("on")
        volBar[1].classList.remove("on")
        volBar[2].classList.remove("on")
        volBar[0].classList.remove("on")
    }

    function plusMinutes() {
        let minutes = minutesDisplay.textContent
        let newMinutes = Number(minutes) + 1
        return newMinutes
    }

    function lessMinutes() {
        let minutes = minutesDisplay.textContent
        let newMinutes = Number(minutes) - 1

        if (newMinutes < 0) {
            newMinutes = 0
        }

        return newMinutes
    }

    function darkMode() {
        buttonLight.classList.add("hide")
        buttonDark.classList.remove("hide")
        buttonForest.classList.add("dark")
        buttonRain.classList.add("dark")
        buttonVoices.classList.add("dark")
        buttonFlame.classList.add("dark")
        body.classList.add("dark")

        for (const element of volBar) {
            element.classList.add("dark")
        }
        for (const element of buttons) {
            element.classList.add("dark")
        }
        for (const element of numbers) {
            element.classList.add("dark")
        }
    }
    
    function lightMode() {
        buttonLight.classList.remove("hide")
        buttonDark.classList.add("hide")
        buttonForest.classList.remove("dark")
        buttonRain.classList.remove("dark")
        buttonVoices.classList.remove("dark")
        buttonFlame.classList.remove("dark")
        body.classList.remove("dark")

        for (const element of volBar) {
            element.classList.remove("dark")
        }

        for (const element of buttons) {
            element.classList.remove("dark")
        }
        for (const element of numbers) {
            element.classList.remove("dark")
        }
    }

    function rangeForest() {
        buttonForest.classList.add("on")
        buttonRain.classList.remove("on")
        buttonVoices.classList.remove("on")
        buttonFlame.classList.remove("on")
        
        iconForest.classList.add("on")
        iconRain.classList.remove("on")
        iconVoices.classList.remove("on")
        iconFlame.classList.remove("on")

        volBar[0].classList.add("on")
        volBar[1].classList.remove("on")
        volBar[2].classList.remove("on")
        volBar[3].classList.remove("on")
    }

    function rangeRain() {
        buttonRain.classList.add("on")
        buttonForest.classList.remove("on")
        buttonVoices.classList.remove("on")
        buttonFlame.classList.remove("on")

        iconRain.classList.add("on")
        iconForest.classList.remove("on")
        iconVoices.classList.remove("on")
        iconFlame.classList.remove("on") 

        volBar[1].classList.add("on")
        volBar[0].classList.remove("on")
        volBar[2].classList.remove("on")
        volBar[3].classList.remove("on")
    }

    function rangeVoices() {
        buttonVoices.classList.add("on")
        buttonRain.classList.remove("on")
        buttonForest.classList.remove("on")
        buttonFlame.classList.remove("on")

        iconVoices.classList.add("on")
        iconRain.classList.remove("on")
        iconForest.classList.remove("on")
        iconFlame.classList.remove("on")

        volBar[2].classList.add("on")
        volBar[1].classList.remove("on")
        volBar[0].classList.remove("on")
        volBar[3].classList.remove("on")
    }

    function rangeFlame() {
        buttonFlame.classList.add("on")
        buttonVoices.classList.remove("on")
        buttonRain.classList.remove("on")
        buttonForest.classList.remove("on")

        iconFlame.classList.add("on")
        iconVoices.classList.remove("on")
        iconRain.classList.remove("on")
        iconForest.classList.remove("on") 

        volBar[3].classList.add("on")
        volBar[1].classList.remove("on")
        volBar[2].classList.remove("on")
        volBar[0].classList.remove("on")
    }

    return {
        play,
        pause,
        stop,
        playPauseForest,
        playPauseRain,
        playPauseVoices,
        playPauseFlame,
        plusMinutes,
        lessMinutes,
        darkMode,
        lightMode,
        rangeForest,
        rangeRain,
        rangeVoices,
        rangeFlame
    }

}