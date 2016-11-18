


angular.module("profileApp",[])

    .controller("profileCtrl",function ($timeout,$scope,$http) {


        $scope.init = function () {

            $scope.schools = $http.get("sch.json")
                .success(function (data) {
                    $scope.schools = data
                })
                .error(function (data) {
                    console.log("something went wrong: ", data);
                });


            $scope.schools =  $scope.schools[1];


            $scope.schoolFilter = function(item){
                filtered = [];
                if(item.id == 1) {
                    filtered.push(item);
                    return  filtered;
                }
            };




        };

        $timeout(function(){
            $scope.ready = true;
        },120);

    })



    /* this filter avoids Filter notTo Array error under angular v1.4 */
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








