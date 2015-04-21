(function () {
    var app = angular.module("StoreApp", ['ngRoute']);

    app.config(["$routeProvider", function ($routeProvider) {
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