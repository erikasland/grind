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

grindModule.directive("dynamic", function($compile){
    return{
        link: function(scope, element){
            var template = "<button ng-click='timerControl.resetTimer()'>Keep Working</button>";
            var linkFn = $compile(template);
            var content = linkFn(scope);
            element.append(content);
        }
    }
});