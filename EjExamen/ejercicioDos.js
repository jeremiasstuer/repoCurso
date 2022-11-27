// Establecemos los datos de entrada:
// por un lado tenemos un array de strings con el nombre de cada comision:

let nombreComisiones = ["comision A", "comision B", "comision C"]
//console.log("nombre Comisiones: ", nombreComisiones);
// generamos un array de arrays con las notas de cada comision
const notasComisiones = [[8, 5, 7, 10, 9, 2, 4, 8, 6, 8], [3, 6, 8, 5, 4, 7, 7, 4, 6, 8], [7, 6, 9, 8, 9, 8, 5, 7, 10, 9]]

// verificamos en consola que los arrays esten dentro de un gran array
//console.log("notas comisiones: ", notasComisiones)

// establecemos un array nuevo con promedio de notas por comision, que se inicializa vacío
let promedioComisiones = []

// se recorre el array de arrays, y para cada elemento (en este caso cada elemento es un array), 
// se calcula el promedio de ese elemento, a través del método REDUCE de arrays (ver funcionamiento de REDUCE)

notasComisiones.forEach(notasComision => promedioComisiones.push((notasComision.reduce( ( anterior, actual ) => anterior + actual, 0 ) / notasComision.length)))

// verifico el correcto cálculo de promedios por consola
//console.log("Promedio de cada comision:", promedioComisiones)

// verifico el valor máximo de promedio dentro de mi nuevo array de promedios
//console.log("valor promedio máximo: ", Math.max(...promedioComisiones))

// encontrar el indice de ese valor para luego entrar con ese mismo indice en el array de nombres,
// para encontrar la comision correspondiente
const indicePromedioMaximo = promedioComisiones.findIndex(promedio => promedio === Math.max(...promedioComisiones));
//console.log("indice promedio maximo", indicePromedioMaximo)

console.log("la comision con promedio mas alto es: ", nombreComisiones[indicePromedioMaximo], "con promedio de: ", Math.max(...promedioComisiones))


/*-----------------------------------------------------------------------------------------*/ 


const indicePromedioMinimo = promedioComisiones.findIndex(promedio => promedio === Math.min(...promedioComisiones));

console.log("la comision con promedio mas bajo es: ", nombreComisiones[indicePromedioMinimo], "con promedio de: ", Math.min(...promedioComisiones));



/*------------------------------------------------------------------------------------------*/


let notitas= [];

// guardo las notas menores a 6
notasComisiones.forEach((notas) =>{
    notitas.push((notas.filter((notas) => notas < 6)))
})

//guardo en el array la longitud de los otros arrays
notitas.forEach((valor,i) => {
    notitas[i] = valor.length 
    console.log(`la comision ${nombreComisiones[i]} tiene ${notitas[i]} desaprobados`);
})



/*------------------------------------------------------------------------------------*/
let notitasMasBajas= []

notasComisiones.forEach((notas,i) =>{
    notitasMasBajas.push((Math.min(...notas)))
    console.log(`las nota mas baja de la ${nombreComisiones[i]} es ${notitasMasBajas[i]}`);
})