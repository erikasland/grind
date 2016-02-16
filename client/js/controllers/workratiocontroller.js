grindModule.controller('workRatioController', function($location, activitiesFactory){
    var _this = this;
    console.log(activitiesFactory.schedule)
    this.nextPage = function(){
        $location.path('/timer')
    }
})