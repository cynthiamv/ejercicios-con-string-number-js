// EJERCICIO 38
// Declarar una variable nombre con tu nombre como valor
// Mostrar en consola la cantidad de letras que tiene tu nombre

let miNombre = "Cynthia";
console.log(miNombre.length);



// EJERCICIO 39
// Declarar una variable nombre con tu nombre como valor
// Declarar una variable apellido con tu apellido como valor
// Mostrar en consola los siguientes mensajes:
// Mi nombre es nombre y tiene nombre.length letras
// Mi nombre es apellido y tiene apellido.length letras
// Utilizar console.log() para cada mensaje
// Se puede utilizar variables auxiliares para la cantidad de letras que tienen los valores de las variables nombre y apellido

let miApellido = "Vico";
let cantidadDeLetrasMiNombre = miNombre.length;
let cantidadDeLetrasMiApellido = miApellido.length;

console.log(`Mi nombre es ${miNombre} y tiene ${cantidadDeLetrasMiNombre} letras`);
console.log(`Mi apellido es ${miApellido} y tiene ${cantidadDeLetrasMiApellido} letras`);



// EJERCICIO 40
// Declarar la variable texto con el siguiente valor: Usando el método
// Declarar la variable metodo con el siguiente valor: concat
// Mostrar en consola el siguiente texto utilizando el método de string concat: Usando el método concat

let texto = "Usando el método";
let metodo = "concat";

console.log(texto.concat(metodo));



//EJERCICIO 41
// Declarar la variable texto y asignar el siguiente valor: HOLA MUNDO
// Mostrar en consola el contenido de la variable texto en minúscula

texto = "HOLA MUNDO";

console.log(texto.toLocaleLowerCase());



// EJERCICIO 42
// Declarar la variable texto y asignar el siguiente valor: hola mundo
// Mostrar en consola el contenido de la variable texto en mayúscula

texto = "hola mundo";

console.log(texto.toLocaleUpperCase());



// EJERCICIO 43
// Declarar una variable texto con el siguiente valor: the dark knight
// Declarar 3 variables en una línea con los siguientes nombres:primerLetra, segundaLetra, tercerLetra
// Asignar a la variable primerLetra el primer caracter del contenido de la variable texto
// Asignar a la variable segundaLetra el caracter número 4 del contenido de la variable texto
// Asignar a la variable tercerLetra el caracter número 9 del contenido de la variable texto
// Declarar una variable resultado con el valor de concatenar las variables primerLetra, segundaLetra y tercerLetra
// Mostrar en consola el contenido de la variable resultado en mayúscula
// Deberías ver TDK como resultado

texto = "the dark knight";
let primerLetra = texto.charAt(0);
let segundaLetra = texto.charAt(4);
let tercerLetra = texto.charAt(9);

let resultado = primerLetra.concat(segundaLetra.concat(tercerLetra));

console.log(resultado.toLocaleUpperCase());



// EJERCICIO 44
// Declarar la variable texto y asignar el siguiente valor: HOLA
// Declarar la variable resultado y asignar el valor de la variable texto invirtiendo cada uno de los caracteres y concatenandolos
// Mostrar en consola el contenido de la variable resultado en minúscula
// Deberías ver como resultado la palabra aloh

texto = "HOLA";
resultado = texto.charAt(3).concat(texto.charAt(2)).concat(texto.charAt(1)).concat(texto.charAt(0));
console.log(resultado.toLowerCase());



// EJERCICIO 45
// Declarar la variable mensaje y establecer el siguiente valor: 'Ada Lovelace fue la ayudante de Charles Babbage.'
// Declarar la variable programadora
// Utilizar el método slice para obtener el nombre Ada Lovelace del texto en la variable mensaje y asignarlo a la variable programadora
// Utilizar la variable programadora y la concatenación de textos para mostrar en consola el siguiente mensaje: 
// "¡Ada Lovelace la primer programadora de la historia!

let mensaje = "Ada Lovelace fue la ayudante de Charles Babbage.";
let programadora = mensaje.slice(0, 12);
console.log('¡'.concat(programadora.concat(" la primera programadora de la historia!")));



// EJERCICIO 46
// Declarar la variable usuarioYPassword y asignarle el siguiente texto: 'ada2019,12345'
// Declarar la variable nombreDeUsuario y utilizar el método substr para obtener el nombre de usuario (ada2019)
// Declarar la variable password y utilizar el método substr para obtener el password (12345)
// Mostrar en consola el siguiente mensaje: El usuario ${nombreDeUsuario} tiene ${password} como password

let usuarioYPassword = 'ada2019,12345';
let nombreDeUsuario = usuarioYPassword.substr(0, 7);
let password = usuarioYPassword.substr(8);

console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password`);


// EJERCICIO 48
// Declarar la variable piString y guardar el valor 3.14 como String
// Declarar la variable constanteString y guardar el valor 42 como String
// Declarar la variable pi y guardar el valor que tenemos en la variable piString y transformarlo como número decimal
// Declarar la variable constante y guardar el valor que tenemos en la variable constanteString y transformarlo como número entero
// Declarar la variable resultado y asignar el resultado de la suma de las variables pi y constante
// Mostrar en consola el contenido de la variable resultado
// Mostrar en consola el mensaje: 45.14 es el resultado de sumar las variables *pi* y *constante*, donde *pi* es el valor que tiene la 
// variable pi y *constante* es el valor de la variable constante. Utilizar el método toString para convertir los numbers a strings.

let piString = '3.14';
let constanteString = '42';

let pi = parseFloat(piString);
let constante = parseInt(constanteString);

resultado = pi + constante;

console.log(resultado);

console.log(resultado.toString(), `es el resultado de sumar las variables *pi* y *constante*, donde ${piString} es el valor que tiene la variable pi y ${constante} es el valor de la variable constante.`)