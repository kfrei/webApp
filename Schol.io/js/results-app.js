


angular.module("resultsApp",[])

    .controller("resultsCtrl",function ($scope,$http) {
        $scope.schools = $http.get("sch.json")
            .success(function (data) {$scope.schools = data})
            .error(function (data) {
                console.log("something went wrong: ", data);
            });

        $scope.sortType     = 'ratingStar'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order

        $scope.scholars=0;
        $scope.reviews=0;
        $scope.categoryFilter="null";

        $scope.checkBoxFilter = function(item){
            filtered = [];
            if(item.scholarships >=  $scope.scholars && item.ratingCounter >=  $scope.reviews
                //&& ( item.city == $scope.cityFilter || $scope.cityFilter==null )
                && (item.category == $scope.categoryFilter || $scope.categoryFilter =="null") ) {
                filtered.push(item);
                return filtered;

            }

        };

    });









