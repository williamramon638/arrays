/* Crea un array o arreglo unidimensional donde tu le indiques el tamaño por teclado
 y crear una función que rellene el array o arreglo con los múltiplos de un número 
 pedido por teclado. Por ejemplo, si defino un array de tamaño 5 y elijo un 3 en la función, 
 el array contendrá 3, 6, 9, 12, 15. Mostrarlos por pantalla usando otra función distinta.
*/

function getMultiplos(tamanio, multiplo) {
    let lista = new Array(tamanio);
    for (let i = 0; i <= lista.length; i++) {
        lista[i] = multiplo*i+multiplo 
    }
    console.log(lista)
}

let numero = +prompt("Digite un numero");

getMultiplos(5, numero);
