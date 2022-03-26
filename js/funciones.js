const result = document.querySelector('#resultado');

/*
    La funcion mostrarAlerta es invocada cuando se solicita la cotizacion y no hay datos
    de entrada en los selectores de la pagina.
    la funcion mostrar un mensaje de error al usuario por un lapso de tres segundos.
*/

export function mostrarAlerta(mensaje){
    
    // La funcion recibe un mensaje como argumento y muestra en pantalla el mensaje al usuario
    const msj = document.querySelector('.error');

    if(!msj){
        const msj = document.createElement('p');
        msj.classList.add('error');
        msj.textContent = mensaje;

        formulario.appendChild(msj)

        setTimeout(()=>{
            msj.remove()
        },3000) 
    }
   
}

/*
    La funcion limpiarHTML es invocada para limpiar la seccion que muestra el resultado de la operacion.
*/
export function limpiarHTML(){
    while(result.firstChild){
        result.removeChild(result.firstChild)
    }
}

/*
    La funcion Spinner es invocada al momento de consultar la API, brinda una animacion para 
    mostar el status de la consulta al usuario
*/
export function spinner(){

    const spinner = document.createElement('div');
    spinner.classList.add("sk-chase");
    spinner.innerHTML = `
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        `;
}
 