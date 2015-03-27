(function () {
    var homeIndexModule = angular.module("HomeIndex");

    homeIndexModule.factory("dataService", ["$http", "$q", function ($http, $q) {
        var _categories = [];

        var _getCategories = function () {

            var deferred = $q.defer();

            $http.get("api/categories")
                   .then(function (response) {
                       angular.copy(response.data, _categories);
                       _isInit = true;
                       deferred.resolve();
                   },
                   function () {
                       //Error
                       deferred.reject();
                   });
            return deferred.promise;
        };
        return {
            categories: _categories,
            getCategories: _getCategories
        };
    }]);

    var ProductsController = ["$scope", "dataService", function ($scope, dataService) {
        $scope.data = dataService;
        dataService.getCategories()
            .then(function (data) {
                //success
            },
            function () {
                //error
                alert("Could not load categories.");
            })
    }];

    homeIndexModule.controller("ProductsController", ProductsController);
}());