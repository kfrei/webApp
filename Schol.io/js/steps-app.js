/**
 * Created by kfrei on 5/12/16.
 */





angular.module("stepsApp",['ngAnimate'])

    .controller("stepsCtrl",function ($timeout,$scope) {

        $scope.step1Select = 'reduce'; // set the default sort type
        $scope.step2Select = 'Διοίκηση Επιχειρήσεων'; // set the default sort type

        $scope.init = function () {
            console.log("initialize !");
        };


        $timeout(function(){
            $scope.ready = true;
        },120);

    });














