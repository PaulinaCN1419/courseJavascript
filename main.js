console.log('Prueba de acceso');

const h1 = document.querySelector("h1");
// al trabajar ocn formulario, ahora creamos el formulario en javascript
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btnCalc = document.querySelector('.btnCalcular');
const result = document.querySelector('#result');
// 1. AddEventListener: escuchar cada vez que se genere un evento
// Para que el botón calcular ejecute algo, Javascript
// lo llama btn.addEventListener para que ejecute algo
// este metodo recibe dos parametros, el primero es el nombre del evento y lo segundo ese el nombre de la funcion o accion que quiero que ejecute,
// no debo colocarle a la funion el parentesis, a la funcion que se lama como parametro

// btnCalc.addEventListener('click', calcular);

// 2. Formularios: Cuando ya trabajamos con formualarios trabajaremos desde
// javascript con otros eventos, ya no usarimoas el addeventlistener, sino el submit y el codigo quedaría

form.addEventListener('submit', calcular);
//3. Adicional a modificar el lalmado del formulario, debemos llamar a otro evento
// para que cuando hagamos clic en calcular, se vea el resultado,
// sino, se seguirá recargando la pagina y no veremos la suma de las entradas de texto
// Para ello vamos a enviar como parametro en la funcion al evento submit, para que se cancele y evite recargar la pagina y nos deje ver el resultado

function calcular(event) {
    // 4. aqui llamo a la propiedad preventDefault para prevenir que se haga ele evento del submit, de recargar la página
    event.preventDefault();
    // aquí llamo al value de cada input para que em presente los valores que ha
    //ingresado el usuario
    const total = Number(input1.value) + Number(input2.value);
    console.log(`El total es ${total}`);
    // vamos a presentar el resultado en el html del navegador
    result.innerText = `El resultado es: ${total}`
}

