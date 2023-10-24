/* Suponga un array con N números enteros generados aleatoriamente y mostrados en pantalla, N debe ser 
un número impar, 
mostrar en pantalla el valor que ocupa el centro del array.
*/

let min=10,max=50,semirandom,arreglo=[],centro,longitud;

let rango = ((max - min) / 2) - 1;
console.log({rango})
for(let i=1;i<max;i++){
    semirandom = 2 * Math.floor(Math.random() * rango) +1 +min;
    arreglo.push(semirandom);
}

// 2n + 1

longitud = arreglo.length;
console.log({longitud})
centro= Math.floor(longitud/2);
console.log({centro})
console.log({arreglo});
console.log(arreglo[centro]);

