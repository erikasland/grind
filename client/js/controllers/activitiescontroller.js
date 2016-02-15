grindModule.controller('activitiesController', function($location){
    var _this = this;
    this.nextPage = function(){
        $location.path('/workratio');
    }
})