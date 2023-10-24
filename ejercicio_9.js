/* Queremos guardar los nombres y las edades de los alumnos de un curso. 
Realiza un programa que introduzca el nombre y la edad de cada alumno. 
El proceso de lectura de datos terminará cuando se introduzca como nombre un asterisco (*) 
Al finalizar se mostrará los siguientes datos:
- Todos los alumnos mayores de edad.
- Encontrar la edad mayor y obtener los alumnos que posean dicha edad.
*/

let matrizEstudiante=[],edad,nombre,mayoresDeEdad=[];

while(nombre!='*'){
    nombre = prompt("Digite el nombre del alumno o '*' si no desea agregar más");
    if(nombre!='*'){
    edad = +prompt("Digite la edad del alumno");
    matrizEstudiante.push([nombre,edad]);
    }
    
}
let edadMayor=0;
for(let i=0;i<matrizEstudiante.length;i++){
    let estudiante=matrizEstudiante[i];
    if (estudiante[1]>=18){
        mayoresDeEdad.push(estudiante[0]);
    }
    if(estudiante[1]>edadMayor){
        edadMayor = estudiante[1];
    }
}

let edadesMayores = matrizEstudiante.filter(function(element) {

    return element[1]===edadMayor;
  
});

console.log(`Alumnos mayores de edad: ${mayoresDeEdad}\nEdad mayor: ${edadMayor},\n Alumnos que poseen edad mayor: ${edadesMayores}`);




