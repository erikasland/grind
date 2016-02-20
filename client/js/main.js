var grindModule = angular.module('grindApp', ['ngRoute'])
grindModule.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = ['./../static/images/pushup.jpg', './../static/images/work.jpg']
        var idx = Math.floor(Math.random() * url.length)
        console.log(scope)
        console.log(idx)
        element.css({
            'background': 'url(' + url[idx] +') no-repeat center center fixed',
            'background-size' : 'cover'
        });
    };
});
grindModule.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/index.html',
            controller: 'landingController', 
            controllerAs: 'landingControl'
        })
        .when('/activities', {
            templateUrl: '/partials/activities.html',
            controller: 'activitiesController', 
            controllerAs: 'activitiesControl'
        })
        .when('/workratio', {
            templateUrl: '/partials/workratio.html',
            controller: 'workRatioController', 
            controllerAs: 'ratioControl'
        })
        .when('/timer', {
            templateUrl: '/partials/timer.html',
            controller: 'timerController', 
            controllerAs: 'timerControl'
        })
})
