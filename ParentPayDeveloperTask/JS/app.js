(function () {
    var homeIndexModule = angular.module("HomeIndex", ['ngRoute']);

    homeIndexModule.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "ProductController",
            templateUrl: "/Templates/ProductsView.html"
        });

        $routeProvider.when("/order/:id", {
            controller: "OrderController",
            templateUrl: "/Templates/OrderSummaryView.html"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }]);
}());