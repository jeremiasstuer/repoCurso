export{}
const leng: number = Number(prompt("ingrese una longitud"));
const arrNumber: number[] = new Array(leng);
let numPositivo: number = 0;
let numNegativo: number = 0;
let numCero: number = 0;

for (let i: number = 0; i < arrNumber.length; i++) {
  arrNumber[i] = Number(prompt(`Ingrese ${leng} numeros para ser comparados`));
  if (arrNumber[i] > 0) {
    numPositivo++;
  } else if (arrNumber[i] < 0) {
    numNegativo++;
  } else {
    numCero++;
  }
}

console.log(`La cantidad de numeros positivos ingresados son: ${numPositivo} `);
console.log(`La cantidad de numeros negativos ingresados son: ${numNegativo} `);
console.log(`La cantidad de numeros ceros ingresados son: ${numCero} `);
