(function () {
    var app = angular.module("StoreApp");
        
    app.controller("ProductController", ["$scope", "$window", "dataService", "checkoutService", function ($scope, $window, dataService, checkoutService) {
        
        $scope.selectedCategory = 1;
        $scope.basket = {};
        $scope.basket.total = 0;
        $scope.basket.basketItems = [];

        $scope.data = dataService;
        dataService.getProducts()
            .then(function (products) {
                //success - do nothing, products will be loaded automatically to the scope object        
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
    }]);

    app.directive('shoppingBasket', function () {
        return {
            templateUrl: 'Directives/ShoppingBasket.html'
        };
    });

    app.directive('productList', function () {
        return {
            templateUrl: 'Directives/ProductList.html'
        };
    });

    app.directive('productCategories', function () {
        return {
            templateUrl: 'Directives/ProductCategories.html'
        };
    });
}());