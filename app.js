(function () {
'use strict';



    

    angular.module('module2App',[])
    .controller('toBuyController', toBuyController)
    .controller('boughtController', boughtController)
    .service('shoppingListCheckoffService',shoppingListCheckoffService);

    toBuyController.$inject=['shoppingListCheckoffService'];
    function toBuyController(shoppingListCheckoffService)
    {
        var tobuy = this;
        tobuy.addShoptoSold = function(index){
            shoppingListCheckoffService.addShoptoSold(index);
            
        }
        tobuy.getTobuyList = shoppingListCheckoffService.getTobuyList();


    }
    boughtController.$inject=['shoppingListCheckoffService'];
    function boughtController(shoppingListCheckoffService)
    {
        var toSold = this;
        toSold.getSoldList = shoppingListCheckoffService.getSoldList();
       
    }
    function shoppingListCheckoffService()
    {
        var service = this;

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

            service.addShoptoSold = function(index,cnt)
            {
                var shopListItems = shoppingList[index];
                var item = {
                    name : shopListItems.name, 
                    quantity : shopListItems.quantity
                };
                soldList.push(item);
                shoppingList.splice(index,1);
            }

            service.getTobuyList = function()
            {
                return shoppingList;
            }
            service.getSoldList = function()
            {
                return soldList;
            }
            
    }

})();