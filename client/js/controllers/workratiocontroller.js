grindModule.controller('workRatioController', function($location, scheduleFactory){
    var _this = this;
    this.error;

    this.nextPage = function(){
        if(!_this.workday || !_this.breakspan || !_this.breaklength){
            _this.error = 'Please enter something'
        }else if(isNaN(_this.workday) || isNaN(_this.breakspan) || isNaN(_this.breaklength)){
            _this.error = 'Time must be entered using numbers'
        }else{
            scheduleFactory.schedule.push({worktime: _this.workday, breakspan: _this.breakspan, breaklength: _this.breaklength})
            // scheduleFactory.create();
            $location.path('/timer');
        }     

    }
})