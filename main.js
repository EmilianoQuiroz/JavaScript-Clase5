//OBJETOS

//---TEMAS A TRATAR---//
/*
-Que es un Objeto
-Que es una función constructora y un objeto creado con ella 
-Analizar cuales son las propiedades de los OBJETOS
y sus metodos
-Diferenciar metodos y funciones
-Que es una declaracion de clases en JavaScript
*/

//---¿QUE ES UN OBJETO?---//
/*
En js, los objetos son estructuras que podemos
definir para agrupar valores bajo un mismo criterio.
Podemos decir que un objeto es una coleccion de datos
relacionados como una entidad. Se componen de un 
listado de pares clave-valor, es decir, contienen
propiedades y valores agrupados.
*/
//EJEMPLO
/*
let nombre ="Santiago"
let edad = 23
let calle = "Beruti 123"
*/
//En vez de usar todas las variables anteriores 
//podemos usar un objeto literal
/*
const persona1 = {
    nombre: "santiago",
    edad: 23,
    calle: "Beruti 123"
}
//Como acceder al elemento de un objeto
//Primero ponemos el nombre del objeto
//Luego un punto 
//Y seguido de eso el nombre del elemento
console.log(persona1.nombre)

console.log(`El nombre es ${persona1.nombre}`)

console.log(`La edad es ${persona1.edad}`)

//Asignar un valor al Objeto

persona1.nombre = "Emiliano"

console.log(persona1.nombre)
*/
//---OBJETOS CONSTRUCTORES---//
/*
En js, constructor de un objeto es una funcion
que utilizamos para crear un nuevo objeto cada
vez que sea necesario. Con esta "funcion constructora"
podemos inicializar las propiedades del objeto 
al momento de ser instanciado con new
*/
/*
function persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}
const persona1 = new persona("Homero", 39, "Calle Falsa 123")
const persona2 = new persona("Marge", 36, "Calle Falsa 123")
const persona3 = new persona("Lisa", 8, "Calle Falsa 123")

console.log(persona1, persona2, persona3)
*/

/*
En el ejemplo anterior se define la funcion
persona, donde se asignan las diferentes propiedades
con los valores recibidos como parametros

Luego, en algun lugar del codigo posterior a
esas lineas, se puede construir un objeto 
persona declarando una variable y asignando
la referencia del objeto instanciado mediante
la instruction new persona
*/
//Por convencion las funciones se escriben con masyusculas
/*
function Persona(name, surname, street, phone, age){
    this.name = name;
    this.surname = surname;
    this.street = street;
    this.phone = phone;
    this.age = 2022 - age;
}
let name = prompt("Ingresa tu nombre")
let surname = prompt("Ingresa tu apellido")
let street = prompt("Ingresa tu domicilio")
let phone = prompt("Ingresa tu numero de telefono")
let age = parseInt(prompt("Ingrese su año de nacimiento"));

const persona = new Persona(name, surname, street, phone, age)
 
console.log(persona)
*/
//¿COMO ACCEDER A UNA FUNCION DENTRO DE UN OBJETO?
/*
function Persona(name, surname, street, phone){
    this.name = name;
    this.surname = surname;
    this.street = street;
    this.phone = phone;

    this.calcularEdad = (age) => {return 2022 - age}
}
*/
/*
let name = prompt("Ingresa tu nombre")
let surname = prompt("Ingresa tu apellido")
let street = prompt("Ingresa tu domicilio")
let phone = prompt("Ingresa tu numero de telefono")
*/
/*
let age = parseInt(prompt("Ingrese su año de nacimiento"));

const persona = new Persona("Santiago", "Quiroz", "beruri 123", "1126608939")
 
console.log(persona.calcularEdad(age));
*/
//3606

//---OPERADOR IN Y FOR IN
/*
El operador in devuelve true si la propiedad 
especificada exixte en el objeto. Mientras que 
el buecle for in permite acceder a todas las
propiedades del objeto, obteniendo una propiedad
por cada iteracion. 
*/
/*
const persona1 = {nombre: "Santiago",
                  edad: 23,
                  calle: "Beruti 123"  
}
console.log("nombre" in persona1)
console.log("origen" in persona1)
//Creamos una constante (propiedad) que guarda todos 
//los valores que posee el objeto persona1
for (const propiedad in persona1){
    console.log(persona1[propiedad])
}
*/

//---CLASES---//
//TERMINAR CLASES 5322

















