/* Recibes un Array de números y debes retornar un Array en donde cada número sea multiplicado por dos (Utilizar métodos de array).
*/

let arreglo=[],numero,rta=true,numerosDobles;

while (rta) {
numero = +prompt ("Digite un numero para el arreglo");
arreglo.push(numero);
rta = +prompt("Desea agregar otro elemento al arreglo? Digite 1 o 2 según su respuesta\n1.Si\n2.No")
if(rta===2){
rta=false; 
}
}

numerosDobles = arreglo.map(function(element) {
    return element * 2;
});

console.log(numerosDobles);