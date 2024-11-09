function nextDay() {
    let tomorow = new Date()
    tomorow.setDate( tomorow.getDate() + 1)
    tomorow.setHours( 0, 0, 0, 0)
    return tomorow
}

function calcTimer() {
    let today = new Date()
    let saleDeadline = nextDay()
    let delta = (saleDeadline - today)/1000
    delta = Math.trunc(delta)

    console.log(delta)

    let hours = Math.trunc(delta/3600)
    let minets = Math.trunc(delta/60) - hours*60
    let seconds = delta - hours*60*60 - minets*60
    let hoursElem = document.getElementById("timerHours")
    let minetsElem = document.getElementById("timerMinets")
    let secondsElem = document.getElementById("timerSeconds")
    hoursElem.innerHTML = twoDigits(hours)
    minetsElem.innerHTML = twoDigits(minets)
    secondsElem.innerHTML = twoDigits(seconds)

}

calcTimer()
setInterval(calcTimer, 1000)


function twoDigits(num) {
    if(num<10) {
        return "0" + num
    } else {
        return num
    }
}



function myFunction() {
    let scriptDesk = document.getElementById('sliderDesktop')
    let scriptMobi = document.getElementById('sliderMobile')

    if (screen.width >= 1050) return;
    

    }

