(function(){
    'use strict';
    
    angular.module('ShoppingListCheckOff',[])
    
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        
        var toBuy = this;
        toBuy.toBuyList = ShoppingListCheckOffService.toBuyItems();
        toBuy.hideBoughtItems = function(itemIndex){
            ShoppingListCheckOffService.hideBoughtItems(itemIndex);
        }
    }
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        
        var bought = this;
        bought.boughtList = ShoppingListCheckOffService.showBoughtItems();        
    }
    
    function ShoppingListCheckOffService(){
        
        var toBuyList =[
        {
            name: "Bread",
            quantity: "2"
        },
        {
            name: "Jam",
            quantity: "3"
        },
        {
            name: "Chips",
            quantity: "5"
        },
        {
            name: "Cookies",
            quantity: "4"
        },
        {
            name: "Flour",
            quantity: "1"
        }
            
        ];
        
        var service = this; 
        var boughtList = [];
        
        service.toBuyItems = function(){
            return toBuyList;
        };
        
        service.showBoughtItems = function(){
            return boughtList;
        };
        
        service.hideBoughtItems = function(itemIndex){
            var hiddenItem = toBuyList[itemIndex]; //pull the value and place in a variable
      toBuyList.splice(itemIndex, 1); //remove the item from the 1st array
      boughtList.push(hiddenItem); //push into the 2nd array
            
        };
    }
})();