(function () {
    var homeIndexModule = angular.module("HomeIndex");

    homeIndexModule.factory("dataService", ["$http", "$q", function ($http, $q) {
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

    homeIndexModule.factory("orderService", ["$http", "$q", function ($http, $q) {
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

    homeIndexModule.factory("checkoutService", ["$http", "$q", function ($http, $q) {
        //var _basketId = {};

        var _checkout = function (basket) {

            var deferred = $q.defer();

            $http.post("api/checkout",basket)
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

    var ProductController = ["$scope", "$window", "dataService", "checkoutService", function ($scope, $window, dataService, checkoutService) {
        
        $scope.selectedCategory = 1;
        $scope.basket = {};
        //$scope.processedBasket = {};
        $scope.basket.total = 0;
        $scope.basket.basketItems = [];

        $scope.data = dataService;
        dataService.getProducts()
            .then(function () {
                //success
            },
            function () {
                //error
                alert("Could not load products.");
            });

        $scope.selectCategory = function (setCategory) {
            $scope.selectedCategory = setCategory;
        }

        $scope.isCategorySelected = function (chkCategory) {
            return $scope.selectedCategory === chkCategory;
        }

        $scope.addToTheBasket = function (product) {
            var index = this.basket.basketItems.indexOf(product);
            if (index!= -1) {
                var item = this.basket.basketItems[index];
                item.quantity++;
                this.basket.basketItems[index] = item;
            }
            else {
                product.quantity = 1;   
                this.basket.basketItems.push(product);
            }
            
            this.basket.total += product.unitPrice;
        }

        $scope.removeFromTheBasket = function (item) {
            var index = this.basket.basketItems.indexOf(item);
            this.basket.total -= item.quantity * item.unitPrice;
            this.basket.basketItems.splice(index, 1);
        }
        //this.processedBasketId = checkoutService.processedBasketId;
        $scope.checkout = function(basket){
            checkoutService.checkout(basket)
            .then(function (basketId) {
                $window.location = "#/order/" + basketId;
            },
            function () {
                //error
                alert("Checkout error!");
            })            
        }
    }];

    var OrderController = ["$scope", "$routeParams", "orderService", function ($scope, $routeParams, orderService) {
        $scope.data = orderService;
        orderService.getOrder($routeParams.id)
            .then(function () {
            },
            function () {
                alert("Could not load order summary!");
            });
    }];

    homeIndexModule.controller("ProductController", ProductController);
    homeIndexModule.controller("OrderController", OrderController);
}());