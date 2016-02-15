grindModule.controller('workRatioController', function($location){
    var _this = this;
    this.nextPage = function(){
        $location.path('/timer')
    }
})