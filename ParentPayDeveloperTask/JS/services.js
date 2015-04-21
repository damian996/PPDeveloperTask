(function () {
    var app = angular.module("StoreApp");

    app.factory("dataService", ["$http", "$q", function ($http, $q) {
        var _categories = [];

        var _getProducts = function () {

            var deferred = $q.defer();

            $http.get("api/products")
                   .then(function (response) {
                       angular.copy(response.data, _categories);
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
            getProducts: _getProducts
        };
    }]);

    app.factory("orderService", ["$http", "$q", function ($http, $q) {
        var _basket = {};

        var _getOrder = function (basketId) {

            var deferred = $q.defer();

            $http.get("api/checkout?basketId=" + basketId)
                   .then(function (response) {
                       angular.copy(response.data, _basket);
                       deferred.resolve();
                   },
                   function () {
                       //Error
                       deferred.reject();
                   });
            return deferred.promise;
        };

        return {
            basket: _basket,
            getOrder: _getOrder
        };
    }]);

    app.factory("checkoutService", ["$http", "$q", function ($http, $q) {
        //var _basketId = {};

        var _checkout = function (basket) {

            var deferred = $q.defer();

            $http.post("api/checkout", basket)
                   .then(function (response) {
                       //angular.copy(response.data, _basketId);
                       deferred.resolve(response.data);
                   },
                   function () {
                       //Error
                       deferred.reject();
                   });
            return deferred.promise;
        };
        return {
            //processedBasketId: _basketId,
            checkout: _checkout
        };
    }]);
}());