

import { consultarCriptomonedas, consultarAPI } from './API.js';
import { mostrarAlerta, limpiarHTML } from './funciones.js';

const formulario = document.querySelector('#formulario');
const moneda = document.querySelector('#moneda');
const criptomoneda = document.querySelector('#criptomonedas');

const objCripto = {
    moneda : '',
    criptomoneda : ''
}


window.onload =()=>{

    consultarCriptomonedas()
    moneda.addEventListener('change', leerDatos)
    criptomoneda.addEventListener('change', leerDatos)
    formulario.addEventListener('submit', validar)
}

/*
    La funcion leerDatos recibe un evento como argumento, su funcion es insertar en el objeto objCripto
    el valor seleccionado por el usuario en los selectores respectivos.
*/
function leerDatos(e){
    objCripto[e.target.name] = e.target.value;
}

/*
    La funcion Validar verifica q los campos no esten vacios en los selectores. Si no estan vacios invocara 
    la consulta a la API, de lo contrario invocara la funcion mostrarAlerta para mostrar un mensaje de error.
*/
function validar(e){
    e.preventDefault();

    const { moneda,criptomoneda } = objCripto;

    if( moneda === '' || criptomoneda === ''){
        
        limpiarHTML()
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }

    consultarAPI(objCripto);
    
}