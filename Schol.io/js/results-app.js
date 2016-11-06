


angular.module("resultsApp",['ui.bootstrap'])

    .controller("resultsCtrl",function ($scope,$http) {
        $scope.schools = $http.get("sch.json")
            .success(function (data) {$scope.schools = data})
            .error(function (data) {
                console.log("something went wrong: ", data);
            });

        $scope.orderSelect = 'ratingStar'; // set the default sort type
        $scope.sortReverse  = true;  // set the default sort order

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
        $scope.currentPage = 1;
        $scope.itemsPerPage = 3;
        $scope.maxSize = 2;
        $scope.totalItems = $scope.schools.length;
    })



    .filter('toArray', function () {
        return function (obj, addKey) {
            if (!angular.isObject(obj)) return obj;
            if ( addKey === false ) {
                return Object.keys(obj).map(function(key) {
                    return obj[key];
                });
            } else {
                return Object.keys(obj).map(function (key) {
                    var value = obj[key];
                    return angular.isObject(value) ?
                        Object.defineProperty(value, '$key', { enumerable: false, value: key}) :
                    { $key: key, $value: value };
                });
            }
        };
    });









