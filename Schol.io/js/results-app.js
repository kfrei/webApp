


angular.module("resultsApp",[])

    .controller("resultsCtrl",function ($scope,$http) {
        $scope.schools = $http.get("sch.json")
            .success(function (data) {$scope.schools = data})
            .error(function (data) {
                console.log("something went wrong: ", data);
            });

        $scope.sortType     = 'ratingStar'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        //$scope.cityFilter ='';
        //$scope.categoryFilter ='Εκπαιδευτικοί Φορείς';

    });







