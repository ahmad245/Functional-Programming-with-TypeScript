"use strict";
// Composition
// Functional composition is a technique or pattern that allows us to combine
// multiple functions to create a more complex function.
var trime = function (s) { return s.trim(); };
var capitalize = function (s) { return s.toUpperCase(); };
var firstChar = function (s) { return s.charAt(0); };
// using composition 
var trimAndCapitalizeSimple = function (s) { return capitalize(trime(s)); };
trimAndCapitalizeSimple('ahmad');
var compose = function (f, g) { return function (x) { return f(g(x)); }; };
var trimAndCapitalize = compose(capitalize, trime);
trimAndCapitalize('ahmad');
// The type of the only argument of f must match the
// return type of the g function. These limitations can be expressed in a more
// correct definition of the compose function:
var compose2 = function (f, g) { return function (x) { return f(g(x)); }; };
var composed1 = compose2(trime, capitalize);
var composed2 = compose2(trime, capitalize);
var composed3 = compose2(composed1, composed2);
// Or we can declare a higher-order function to compose three functions in a single call:
var compose3 = function (f, g, h) { return function (x) { return f(g(h(x))); }; };
//We can also create a helper that allows us to compose an unlimited number of functions:
var composeMany = function () {
    var fun = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fun[_i] = arguments[_i];
    }
    return function (arg) {
        return fun.reduce(function (prev, acc) {
            return acc(prev);
        }, arg);
    };
};
var composed = composeMany(trime, capitalize, firstChar);
console.log(composed('ahmad'));
