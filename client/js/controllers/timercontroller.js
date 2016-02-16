grindModule.controller('timerController', function($location, scheduleFactory){
    var total_time = scheduleFactory.schedule[scheduleFactory.schedule.length-1].breaklength
    startTimer((total_time * 60) * 60, document.querySelector('#time'))
    function startTimer(duration, display) {
        var timer = duration;
        setInterval(function () {
            console.log(timer)
            hours = parseInt((timer / 60) / 60)
            minutes = parseInt((timer / 60) - (hours * 60), 10);
            seconds = parseInt(timer % 60, 10);
            
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            console.log(minutes)
            display.textContent = hours + ":" + minutes + ":" + seconds;

            if (timer-- < 1) {
                timer = 0;
            }
        }, 1000);
    }
})