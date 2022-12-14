import Sounds from './sounds.js'
import Timer from './timer.js'
import Events from './events.js'
import Controller from './controller.js'
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
} from './elements.js'

const timer = Timer({
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonLess,
    minutesDisplay,
    secondsDisplay
})

const controller = Controller({
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
    buttonLight,
    buttonDark,
    body,
    buttons,
    numbers,
    volBar
})

const sounds = Sounds({
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonLess,
    buttonForest,
    buttonRain,
    buttonVoices,
    buttonFlame
})

Events( {controller, timer, sounds} )

