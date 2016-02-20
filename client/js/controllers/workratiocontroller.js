grindModule.controller('workRatioController', function($location, scheduleFactory){
    var _this = this;
    this.error;
    // if(scheduleFactory.schedule.length == 0){$location.path('/')}

    this.nextPage = function(){
        _this.error = '';
        if(!_this.workday || !_this.breakspan || !_this.breaklength){
            _this.error = 'Please fill out the whole form.'
        }else if(isNaN(_this.workday) || isNaN(_this.breakspan) || isNaN(_this.breaklength)){
            _this.error = 'Numbers only, please.'
        }else{
            scheduleFactory.schedule.push({worktime: _this.workday, breakspan: _this.breakspan, breaklength: _this.breaklength})
            // scheduleFactory.create();
            $location.path('/timer');
        }     

    }
})