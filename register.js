var price = 0;
var amountGiven = 0;
var change = 0;
var dollars = 0;
var halfDollars = 0;
var quarters = 0;
var dimes = 0;
var nickels = 0;
var pennies = 0;

price = prompt("What is the price of the item (in cents)?");
amountGiven = prompt("How much was given (in cents)?");
change = amountGiven - price;

dollars = Math.floor(change / 100);
change = change % 100;
halfDollars = Math.floor(change / 50);
change %= 50;
quarters = Math.floor(change / 25);
change %= 25;
dimes = Math.floor(change / 10);
change %= 10;
nickels = Math.floor(change / 5);
change %= 5;
pennies = Math.floor(change / 1);
change %= 1;


alert("The number of dollars to return is " + dollars);
alert("The number of half-dollars to return is " + halfDollars);
alert("The number of quarters to return is " + quarters);
alert("The number of dimes to return is " + dimes);
alert("The number of nickels to return is " + nickels);
alert("The number of pennise to return is " + pennies);
