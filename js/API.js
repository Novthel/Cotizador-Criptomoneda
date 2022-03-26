import { limpiarHTML, spinner } from './funciones.js';

const selector = document.querySelector('#criptomonedas');
const result = document.querySelector('#resultado');


/*
    consultarCriptomonedas: realiza una consulta a la API y devuelve la invocacion de la
    funcion selectCriptomoneda pasando como argumento la Data obtenida en la consulta.
*/
export async function consultarCriptomonedas(){
    
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        selectCriptomoneda(resultado.Data)
        
    } catch (error) {
        console.log(error);
    }
}

/*
    selectCriptomoneda: recibe un Json como argumento. procesa la informacion y llena el menu desplegable
    de selector de criptomonedas.
*/

function selectCriptomoneda(criptomonedas){

    criptomonedas.forEach(cripto => {
        const {Name, FullName } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        selector.appendChild(option)
    });
}

/*
    funcion consultarAPI: recibe un objeto como argumento. realiza la consulta a la API y devuelve la 
    invocacion de la funcion mostrarHTML pasandole como argumento la data obtenida de la consulta.
*/

export async function consultarAPI(objCripto){

    const { moneda, criptomoneda } = objCripto;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    spinner();
    
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        mostrarHTML(resultado.DISPLAY[criptomoneda][moneda])

    } catch (error) {
        console.log(error)
    }
}

/*
     mostrarHTML: recibe un Json como argumento. procesa la informacion y se encarga de mostrar por pantalla 
     la informacion consultada por el usuario.
*/

function mostrarHTML(datos){

    limpiarHTML();
    
    const { PRICE,HIGHDAY,LOWDAY,LASTUPDATE } = datos;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: ${PRICE}`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `El precio mas alto del dia fue: ${HIGHDAY}`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `El precio mas bajo del dia fue: ${LOWDAY}`;

    const actualizacion = document.createElement('p');
    actualizacion.innerHTML = `fecha de actualizacion: ${LASTUPDATE}`;

    result.appendChild(precio)
    result.appendChild(precioAlto)
    result.appendChild( precioBajo)
    result.appendChild(actualizacion)
}


