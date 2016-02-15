var grindModule = angular.module('grindApp', ['ngRoute'])
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