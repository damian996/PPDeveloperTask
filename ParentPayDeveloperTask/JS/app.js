(function () {
    var homeIndexsModule = angular.module("HomeIndex", ['ngRoute']);

    homeIndexModule.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "HomeController",
            templateUrl: "/Templates/ProductsView.html"
        });
        
        $routeProvider.otherwise({ redirectTo: "/" });
    }]);
}());