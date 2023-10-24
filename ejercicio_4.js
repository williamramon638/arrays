/* Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados y el promedio de los 
desaprobados e indique la cantidad de aprobados y desaprobados.
*/
let rta, notas=[],nota, nota_aprobado=12, aprobados=0, reprobados=0, suma_aprobados=0, suma_reprobados=0;
do {
    do {
        nota = +prompt("Digite una nota entre 0-20");
    } while (nota<0||nota>20);
    notas.push(nota);
    rta = prompt("Desea agregar otra nota? 1. Si 2.No");
} while (rta==1||rta<1||rta>2);


for (let i=0; i<notas.length;i++){
    if (notas[i]>=nota_aprobado){
        suma_aprobados += notas[i];
        aprobados += 1;
    }else{
        suma_reprobados += notas[i];
        reprobados += 1;
    }
}

console.log(`La cantidad de aprobados es: ${aprobados} y el promedio es: ${aprobados >0 ? suma_aprobados/aprobados: 0}\nLa cantidad de reprobados es: 1${reprobados} y el promedio es: ${reprobados>0? suma_reprobados/reprobados: 0}`);