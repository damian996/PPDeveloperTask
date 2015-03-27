(function () {
    var homeIndexModule = angular.module("HomeIndex", ['ngRoute']);

    homeIndexModule.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "ProductsController",
            templateUrl: "/Templates/ProductsView.html"
        });
        
        $routeProvider.otherwise({ redirectTo: "/" });
    }]);
}());