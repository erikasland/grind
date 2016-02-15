grindModule.controller('landingController', function($location){
    this.nextPage = function(){
        $location.path('/activities');
    }
})