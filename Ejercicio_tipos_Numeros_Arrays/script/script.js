"use strict";

var leng = Number(prompt("ingrese una longitud"));
var arrNumber = new Array(leng);
var numPositivo = 0;
var numNegativo = 0;
var numCero = 0;
for (var i = 0; i < arrNumber.length; i++) {
    arrNumber[i] = Number(prompt("Ingrese ".concat(leng, " numeros para ser comparados")));
    if (arrNumber[i] > 0) {
        numPositivo++;
    }
    else if (arrNumber[i] < 0) {
        numNegativo++;
    }
    else {
        numCero++;
    }
}
console.log("La cantidad de numeros positivos ingresados son: ".concat(numPositivo, " "));
console.log("La cantidad de numeros negativos ingresados son: ".concat(numNegativo, " "));
console.log("La cantidad de numeros ceros ingresados son: ".concat(numCero, " "));
