/* Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.
*/

let enteros = [1,2,3,4,5,6,7,8,9,10], minimo,maximo,suma=0;

maximo = Math.max(...enteros);
minimo = Math.min(...enteros);
suma = enteros.reduce(function (a, b) {
    return a + b;
  });

console.log(`El valor mínimo es: ${minimo}\nEl valor máximo es: ${maximo}\nLa media es: ${suma/enteros.length}`);

