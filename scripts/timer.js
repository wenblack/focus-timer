import Sounds from './sounds.js'

export default function({
    minutesDisplay,
    secondsDisplay
}) {
    let timerTimeout
    let minutes = minutesDisplay.textContent

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeout)
    }

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function countdown() {
        timerTimeout = setTimeout(() => {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)

            updateDisplay(minutes, seconds)

            if (minutes == 0 && seconds == 0) {
                updateDisplay()
                Sounds().timeEnd()
                return
            }            

            if (seconds == 0) {
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds -1))
            
            countdown()
            
        }, 1000)
        
    }
        
    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeout)
    }

    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }

}