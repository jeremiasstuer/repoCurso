let meses = ["marzo ","abril ","mayo ","junio ","julio ","agosto ","septiembre ","octubre ","noviembre ","diciembre "];
let notasAlumno = [7,6,9,5,8,7,10,4,8,5];


notasAlumno.forEach((nota, i) => {
    if(nota<6){
        console.log(meses[i], "con nota igual a:", notasAlumno[i] )
    };
});



/*
notasAlumno.forEach((nota, i)=>{
    if(nota === Math.min(...notasAlumno)){
        console.log(meses[i], "la nota mas baja es:", notasAlumno[i] )
    }; 
});
*/


/*
notasAlumno.forEach((nota, i)=>{
    if(nota === Math.max(...notasAlumno)){
        console.log(meses[i], "la nota mas alta es:", notasAlumno[i] )
    }; 
});
*/

const promedioAlumno = notasAlumno.reduce((acumulador, valorActual)=> acumulador + valorActual )/ notasAlumno.length 
console.log(`El promedio del alumno es: ${promedioAlumno}`)