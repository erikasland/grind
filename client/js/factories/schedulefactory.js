grindModule.factory('scheduleFactory', function($http){
    var factory = {};
    factory.schedule = [];
    factory.create = function(){
        $http.post('/schedule', {info: factory.schedule}).success(function(output){
            factory.schedule = output;
        })
    }
    return factory;
})