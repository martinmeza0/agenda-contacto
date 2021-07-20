const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const nota = document.querySelector('.nota');
const botonAgregar = document.querySelector('.btn-agregar');
const listado = document.querySelector('.listado');
let contador = document.querySelector('.titulo')
let numeroContador = 0;


//accedemos al local storage para guardar los contactos
const localStorage = window.localStorage;

botonAgregar.onclick = () =>{
    if ((!nombre.value) || (!numero.value) || (!direccion.value)) {
        Swal.fire({
            icon: 'error',
            text: '¡Completa los datos necesarios!',
            confirmButtonColor: '#52b788'
        });
        nombre.classList.add('error');
        numero.classList.add('error');
        direccion.classList.add('error');
        return;
    }
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value
    } 
    guardarContacto(localStorage, contacto);
}

cargarContactos(localStorage, listado);

