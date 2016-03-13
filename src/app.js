/**
 * @ngdoc module
 * @name zest.ui
 * @module zest.ui
 */
angular.module('loginTest', [])
    .controller('loginTestController', ['$scope', 'loginService', function($scope, loginService) {
        $scope.barani = 1;
        $scope.callBarani = function() {
            $scope.barani = loginService.baraniCall();
        };
    }]).factory('loginService', function(){
        return {
            baraniCall : function(){
                return 2;
            }
        }
    });