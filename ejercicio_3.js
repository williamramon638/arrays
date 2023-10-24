/* Buscar un elemento dentro de un arreglo que nosotros le pedimos por teclado. 
Indicar las posición donde se encuentra. Si hay más de uno, indicar igualmente la posición. 
(FindIndex)
*/

let numbers = [1,2,3,4,5,6,7,5,8,9,10],suma=0, numerosQueCoinciden=[];

numero = +prompt("Digite el numero que desea buscar en el arreglo");

for (let i = 0; i<numbers.length;i++){
    if(numbers[i]==numero){
        numerosQueCoinciden.push(i);
        suma = suma + 1;
    }
}

console.log (`Coincidieron ${suma} números, sus posiciones son: ${numerosQueCoinciden}`);