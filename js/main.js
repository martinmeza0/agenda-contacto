const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const botonAgregar = document.querySelector('.btn-agregar');
const listado = document.querySelector('.listado');

//accedemos al local storage para guardar los contactos
const db = window.localStorage;

botonAgregar.onclick = () =>{
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value
    }
    guardarContacto(db, contacto);
}

cargarContactos(db, listado);

