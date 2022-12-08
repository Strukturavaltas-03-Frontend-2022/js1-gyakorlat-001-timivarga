//`sum.js`: Hozz létre két függvénykifejezést arrow function-nel! 
//A függvények neve summation és subtraction legyen. 
//Mindegyik függvény két paramétert kap, ezek neve a és b. 
//Amennyiben bármelyik paraméter hiányozna a függvény meghívásakor, úgy az alapértelmezett érték a 0 legyen. 
//A summation visszatér a két szám összegével, a subtraction visszatér a két szám különbségével. 

'use strict'

// const summation = function (a=0, b=0) {
//     return (a + b)};
// console.log(summation(1, 2 ));

const summation = (a = 0, b = 0) => (a + b);
console.log(summation(1));



// const subtraction = function (a=0, b=0) {
//     return (a - b)};
// console.log(subtraction(1, 2 ));

const subtraction = (a = 0, b = 0) => (a - b);
console.log(subtraction(2));