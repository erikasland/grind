grindModule.controller('activitiesController', function($location, scheduleFactory){
    var _this = this;
    this.error;
    this.nextPage = function(){
        if(scheduleFactory.schedule.length < 4){
            _this.error = 'Please choose at least 4 activities. We want to keep your day spontaneous!'
            return
        }
        $location.path('/workratio');
    }

    this.submitSchedule = function(userChoice){
        var schedule = scheduleFactory.schedule
        for(var index = 0; index < schedule.length; index++){
            if(schedule[index].id === userChoice.id){
                for(var runner = index; runner < schedule.length-1; runner++){
                    if(schedule.length === 1){
                        schedule.pop();
                        return
                    }
                    schedule[runner] = schedule[runner + 1];
                }
                schedule.pop();
            }
        }
        if(schedule.length < 8){
            _this.error = '';
            scheduleFactory.schedule.push(userChoice);
        }else{
            _this.error = 'You can only select 8 activities. Feel free to switch them around. Just stay under 8.'
        }
    }
})