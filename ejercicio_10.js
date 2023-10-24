/* Diseñar el algoritmo correspondiente a un programa, que:
- Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
- Carga la tabla con valores numéricos enteros.
- Suma todos los elementos de cada fila y todos los elementos de cada columna visualizando los resultados en 
pantalla.
*/

let matriz=[], elemento,rango,min=-1,max=21;
rango = ((max-min)/2)-1;

function getRandom(){
    return Math.floor(Math.random()*rango)+1+min;
}

for (let i=0; i<5;i++){
    matriz.push([getRandom(),getRandom(),getRandom(),getRandom(),getRandom(),0]);
}

matriz.push([0,0,0,0,0,0]);

console.log(matriz.length);


function sumQueues(tabla) {
    for (let y = 0; y < tabla.length-1; y++) {
        let suma = 0;
        for (let x = 0; x < tabla[y].length-1; x++) {
            suma += tabla[y][x];
            tabla[y][5]=suma;
        }
    }
}


function sumColumns(table) {
    for (let y = 0; y < table[0].length-1; y++) {
        let suma = 0;
        for (let x = 0; x < table[y].length-1; x++) {
            suma += table[x][y];
            table[5][y]=suma;
        }
    }
    
}

sumQueues(matriz);
sumColumns(matriz);
console.table(matriz);



