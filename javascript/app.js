/**
 * Created by manish on 24/4/17.
 */
(function () {
    var app = angular.module('Blog', []);
    app.controller('Posts', function ($scope, $http){
        $scope.search = function () {
            $scope.products = '';
            $scope.loading = true;
            if($scope.query){
            }
        };
        $http({
            method : "GET",
            url : "https://gjw5o97eaj.execute-api.us-east-1.amazonaws.com/v1"
        }).success(function mySucces(response) {
            $scope.data = JSON.parse(response);
            $scope.loading = false;
        });
    });
})();