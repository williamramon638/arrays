/* Crea un array o arreglo unidimensional con un tamaño de 10, inserta los valores numéricos que desees 
de la manera que quieras y muestra por pantalla la media de valores del array.
*/

let numbers = [1,2,3,4,5,6,7,8,9,10],suma=0;

for (let index = 0; index < numbers.length; index++) {
    suma =  suma + numbers [index];
}

console.log(suma/numbers.length);


