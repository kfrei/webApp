


angular.module("profileApp",[])

    .controller("profileCtrl",function ($timeout,$scope,$http) {

        $scope.items = [1, 2, 3, 4, 5];


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
    })



    /* BxSlider Directives for ng-repeat*/
    .directive('bxSlider', [function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$on('repeatFinished', function () {
                    element.bxSlider(scope.$eval('{' + attrs.bxSlider + '}'));
                });
            }
        }
    }])
    .directive('notifyWhenRepeatFinished', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit('repeatFinished');
                    });
                }
            }
        }
    }]);








