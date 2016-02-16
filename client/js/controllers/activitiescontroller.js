grindModule.controller('activitiesController', function($location, scheduleFactory){
    var _this = this;
    this.error;
    this.nextPage = function(){
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
                console.log(schedule)
            }
        }
        if(schedule.length < 8){
            scheduleFactory.schedule.push(userChoice);
        }else{
            _this.error = 'It seems like you are attempting to choose more than 8 choices. Stick with 8 please.'
        }
    }
})