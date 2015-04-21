(function () {
    var app = angular.module("StoreApp");

    app.controller("OrderController", ["$scope", "$routeParams", "orderService", function ($scope, $routeParams, orderService) {
        $scope.data = orderService;
        orderService.getOrder($routeParams.id)
            .then(function () {
            },
            function () {
                alert("Could not load order summary!");
            });
    }]);

    app.directive('orderSummary', function () {
        return {
            templateUrl: 'Directives/OrderSummary.html'
        }
    });
}());