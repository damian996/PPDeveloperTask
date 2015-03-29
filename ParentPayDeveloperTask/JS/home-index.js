(function () {
    var homeIndexModule = angular.module("HomeIndex", []);

    homeIndexModule.factory("dataService", ["$http", "$q", function ($http, $q) {
        var _categories = [];

        var _getProducts = function () {

            var deferred = $q.defer();

            $http.get("api/products")
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
            getProducts: _getProducts
        };
    }]);

    homeIndexModule.factory("checkoutService", ["$http", "$q", function ($http, $q) {
        var _basket = [];

        var _checkout = function (basket) {

            var deferred = $q.defer();

            $http.post("api/checkout",
                JSON.stringify(basket),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                   .then(function (response) {
                       angular.copy(response.data, _basket);
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
            basket: _basket,
            checkout: _checkout
        };
    }]);

    var ProductController = ["$scope", "$window", "dataService", "checkoutService", function ($scope, $window, dataService, checkoutService) {
        this.selectedCategory = 1;
        this.basket = {};
        this.basket.total = 0;
        this.basket.basketItems = [];

        this.data = dataService;
        dataService.getProducts()
            .then(function (data) {
                //success
            },
            function () {
                //error
                alert("Could not load products.");
            });

        this.selectCategory = function (setCategory) {
            this.selectedCategory = setCategory;
        }

        this.isCategorySelected = function (chkCategory) {
            return this.selectedCategory === chkCategory;
        }

        this.addToTheBasket = function (product) {
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

        this.removeFromTheBasket = function (item) {
            var index = this.basket.basketItems.indexOf(item);
            this.basket.total -= item.quantity * item.unitPrice;
            this.basket.basketItems.splice(index, 1);
        }

        this.checkout = function (basket) {
            checkoutService.checkout(basket)
            .then(function (basket) {
                this.basket = basket;
                $window.location = 'Home/OrderConfirmation';
            },
            function () {
                //error
                alert("Checkout error!");
            })
        }

    }];

    homeIndexModule.controller("ProductController", ProductController);
}());