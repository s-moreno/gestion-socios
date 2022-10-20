/*
DESARROLLO WEB EN ENTORNO CLIENTE
UD02 - TAREA EVALUATIVA 02
SERGIO MORENO SANCHEZ
20/10/2022
*/

'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById(
  'contenedorPintarSocios'
)

// creamos el array de Socios vacío
var arraySocios = new Array()



// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = 'model/datosSocios.json'

  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json'
    }),
    method: 'GET'
  })

  fetch(request).then(response => {
    response.json().then(data => {
      console.log('Datos: ', data)
      aniadirSociosInicialesArray(arraySocios, data)
    })
  })
}

/* 
  metodo para añadir socios al array 
  cuando arranca la pagina web
*/
function aniadirSociosInicialesArray (arraySocios, data) {
  //  TODO: cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array
  data.forEach(element => {
    arraySocios.push(element)
  });
}

/*
  Metodo para capturar los datos del socio introducidos en el formulario
*/
function capturarDatosSocio () {
  let nombre = document.getElementById('fnombre').value
  let apellido = document.getElementById('fapellido').value
  crearSocio(nombre, apellido)
}

/* 
  Metodo para crear un socio pasandole el nombre y el apellido
  y añadirlo al array
 */
function crearSocio (nombre, apellido) {
  const socio = {
    id: crearID(),
    nombre: nombre,
    apellido: apellido
  }
  arraySocios.push(socio)
}

/*
  Metodo para crear el ID del socio en funcion del ultimo
  ID que hay en el array de socios
*/
function crearID () {
  return arraySocios.length +1
}

// EJERCICIO 2

/*
  TODO: metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  var html = ''
 // borramos todo lo que hay en el div
  document.getElementById('contenedorPintarSocios').innerHTML = html
  
  // creamos la estructura html (lista ordenada) con todos los datos socios
  html += '<ul>'
  for (let i=0; i < arraySocios.length; i++) {
    html += '<li> Socio número ' + arraySocios[i].id + ': ' + arraySocios[i].nombre + ' ' + arraySocios[i].apellido + '</li>'
  }
  html += '</ul>'
  // pintamos el contenedor con la estructura html
  document.getElementById('contenedorPintarSocios').innerHTML = html
}

// ------------------- MAIN ------------------------
cargarSociosJSON()

console.log('Acaba el programa')
