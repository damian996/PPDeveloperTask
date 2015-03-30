(function () {
    var homeIndexModule = angular.module("HomeIndex", []);

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

    homeIndexModule.factory("checkoutService", ["$http", "$q", function ($http, $q) {
        var _basket = {};

        var _checkout = function (basket) {

            var deferred = $q.defer();

            $http.post("api/checkout",basket)
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
            processedBasket: _basket,
            checkout: _checkout
        };
    }]);

    var ProductController = ["dataService", "checkoutService", function (dataService, checkoutService) {
        this.selectedCategory = 1;
        this.basket = {};
        this.processedBasket = {};
        this.basket.total = 0;
        this.basket.basketItems = [];

        this.data = dataService;
        dataService.getProducts()
            .then(function () {
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
        this.processedBasket = checkoutService.processedBasket;
        this.checkout = function(basket){
            checkoutService.checkout(basket)
            .then(function () {
            },
            function () {
                //error
                alert("Checkout error!");
            })            
        }
    }];

    homeIndexModule.controller("ProductController", ProductController);
}());