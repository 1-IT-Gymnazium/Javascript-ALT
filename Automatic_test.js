//V tomto kodu si ukazeme, jak funguje automaticke testovani kodu.

function sum(a, b) {
    return a + b;
}

//module exports je objekt, ktery obsahuje vsechny funkce, ktere chceme exportovat

module.exports = sum; //tento kod exportuje funkci sum
//import funkce from 'automatic_tests.js'
