var app = angular.module('myApp',['ngRoute','ngCookies','ngMaterial']).config(function($mdProgressCircularProvider , $sceProvider) {

    // Example of changing the default progress options.
    $mdProgressCircularProvider.configure({
        progressSize: 50,
        strokeWidth: 10,
        duration: 800
    });

    $sceProvider.enabled(false);

});

