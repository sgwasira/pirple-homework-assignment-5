/*
 * This is a library with simple functions
 * Shepherd Gwasira
 */



 var lib = {};

 var getRandomInt = function(max){
   return Math.floor(Math.random() * Math.floor(max));
 };

 var sumTwoNumbers = function(c, d){
   return c + d;
 }

 lib.sumTwoNumbers = function(d, c){
   if(typeof(c) == 'number' && typeof(d) == 'number')
    return c + d;
   return undefined;
 }

 lib.returnLenghtOfString = function(str){
   if(str)
    return str.length;
   return 0;
 }
 lib.generateRandomNumberBetweenZeroAndTen = function(){
   return getRandomInt(10);
 }

 lib.generateRandomNumberBetweenZeroAndOneHundred = function(){
   return getRandomInt(100);
 }

 lib.generateRandomNumberBetweenZeroAndArgument = function(arg){
   if(typeof(arg) == 'number')
    return getRandomInt(arg);
   return undefined;
 }

 lib.checkStringIsPalindrome = function(str){
   if(str == null || str == undefined || (str && str.length == 0) || (typeof(str) != 'string')){
     return false;
   }
   var left = 0;
   var right = str.length-1;

   while(left < right){
     if(str[left] != str[right]){
       return false;
     }
     left = left + 1;
     right = right -1;
   }

   return true;
 }

 module.exports = lib;
