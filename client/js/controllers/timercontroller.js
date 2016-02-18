grindModule.controller('timerController', function($location, scheduleFactory, $compile, $scope){
    var _this = this;
    var schedule = scheduleFactory.schedule;

    this.timerRunning = false;
    this.timerPaused = false;
    this.resetWorkFlow = false;
    this.closeVideo = false;
    this.break_span = schedule[schedule.length-1].breakspan

    this.timer = function(duration, countdown_element, break_length, video_bool){
        if(_this.closeVideo === true){
            angular.element('#test').html('')
            _this.closeVideo = false
        };
        var initial_time = duration
        var timer = duration;
        var break_span = schedule[schedule.length-1].breakspan;
        var time_until_break = Math.floor(break_span * 60 * 60);

        var timerId = setInterval(function(){
            hours = parseInt((timer / 60) / 60)  //sets initial hours, minutes, seconds
            minutes = parseInt((timer / 60) - (hours * 60));
            seconds = parseInt(timer % 60);

            minutes = minutes < 10 ? "0" + minutes : minutes;  //formats mins/secs correctly if < 10
            seconds = seconds < 10 ? "0" + seconds : seconds;
            countdown_element.textContent = hours + ":" + minutes + ":" + seconds;

            if(_this.resetWorkFlow === true){  //resets time to what it initially was
                hours = parseInt((initial_time / 60) / 60)
                minutes = parseInt((initial_time / 60) - (hours * 60));
                seconds = parseInt(initial_time % 60);
                countdown_element.textContent = hours + ":" + minutes + 0 + ":" + seconds + 0;  //change to angular.element('')
            }
            if(timer-- < 1 || _this.resetWorkFlow === true){  //if timer is up, reset the timer
                clearInterval(timerId);
            }
            if(time_until_break-- < 0){  //on break displays exercise.
                var time_sub_from_break = schedule[schedule.length - 1].breaklength * 60;
                var time_after_break = (((hours * 60) * 60) + (minutes * 60) + seconds)  - time_sub_from_break
                var random_int = Math.round(Math.random(1) * (schedule.length - 2));
                console.log(random_int)
                console.log(schedule[random_int].title)
                angular.element('#notification').html('<audio autoplay><source src="../../static/notification.mp3"/></audio>')
                angular.element('#test').html('<div id="break-div"><h3 id="event_title">' + schedule[random_int].title + '</h3><iframe width="854" height="480" src="https://www.youtube.com/embed/zoZWgTrZLd8" frameborder="0" allowfullscreen></iframe><br><br><button id="back_to_work" ng-click="timerControl.resetTimer();timerControl.restartWorkFlow('+ time_after_break +')">Back to work!</button></div>')
                $compile( angular.element('#back_to_work') )($scope);
                console.log($scope)
                clearInterval(timerId);

            }  
            if(_this.timerPaused === true){
                timer = timer + 1;
            }   
        }, 1000);
    }

    this.startWorkFlow = function(){
        _this.resetWorkFlow = false;
        var countdown_element = document.querySelector('#time');  //change to angular.element('')
        var total_time = schedule[schedule.length-1].worktime * 60 * 60;
        var break_length = schedule[schedule.length-1].break_length
        _this.timer(total_time, countdown_element, break_length);
        _this.timerRunning = true;
    }

    this.restartWorkFlow = function(total_time){
        _this.resetWorkFlow = false;
        var countdown_element = document.querySelector('#time');  //change to angular.element('')
        var break_length = schedule[schedule.length-1].breakspan
        _this.timer(total_time, countdown_element, break_length);
        _this.timerRunning = true;
    }

    this.pauseResumeTimer = function(){
        if(_this.timerPaused === true){
            _this.timerPaused = false;
        }else{
            _this.timerPaused = true;
        }
    }

    this.resetTimer = function(){
       _this.resetWorkFlow = true;
       _this.closeVideo = true;
    }
})