(function () {
'use strict';

var shoppingList = [
    {
    name: "Milk",
    quantity: 4
    },
    {
        name: "Chocolate",
        quantity: 53
    },
    {
        name: "Cookies",
        quantity: 43
    },
    {
        name: "Smoothies",
        quantity: 31
    },
    {
        name: "Cake",
        quantity: 10
    },
    {
        name: "Milktea",
        quantity: 24
    },
    {
        name: "Shabu-shabu",
        quantity: 23
    },
    {
        name: "Lemonade",
        quantity: 20
    },
    {
        name: "Coffee",
        quantity: 20
    },
    {
        name: "Cheese Cake",
        quantity: 20
    }
    ];

    var soldList = 
    [{}];

    angular.module('module2App',[])
    .controller('toBuyController', toBuyController)
    .controller('boughtController', boughtController);

    toBuyController.$inject=['$scope'];
    function toBuyController($scope)
    {
        $scope.shop = shoppingList;
       $scope.addBought = function(){

            return console.log("To do");

       }
        
    }
    boughtController.$inject=['$scope'];
    function boughtController($scope)
    {
        $scope.sold = soldList;
       
        
    }
})();