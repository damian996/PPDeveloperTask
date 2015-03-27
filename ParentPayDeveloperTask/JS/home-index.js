(function () {
    var homeIndexModule = angular.module("HomeIndex");

    var ProductsController = ["$scope", function ($scope) {
        $scope.messtage = "TEST";
    }];

    homeIndexModule.controller("ProductsController", ProductsController);
})