'use strict';

describe('loginTest', function () {

    describe('loginController', function(){
        var $controller, $scope, loginService;

        loginService = {
            baraniCall : function () { return 8}
        };

        beforeEach(function() {
            module('loginTest');

            module(function($provide) {
                $provide.value('loginService', loginService);
            });

            inject(function(_$controller_, _$rootScope_, _loginService_){
                $controller = _$controller_;
                $scope = _$rootScope_.$new();
                loginService = _loginService_;
            });
        });

        function createController() {
            return $controller('loginTestController', { $scope: $scope });
        }

        it('should test', function () {
            var controller = createController();
            expect($scope.barani).toBe(1);
            console.log($scope.barani);
            $scope.callBarani();
            console.log($scope.barani);
            expect($scope.barani).toBe(8);
        });
    });

    describe('loginService', function(){
        var loginService;
        beforeEach(function() {
            module('loginTest');
            inject(function(_loginService_){
                loginService = _loginService_;
            });
        });
        it('should test', function () {
            expect(loginService.baraniCall()).toBe(2)
        });
    });

});