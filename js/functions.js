const guardarContacto = (localStorage, contacto) => {
    //JSON.stringify() convierte un objeto en una cadena de texto JSON
    localStorage.setItem(contacto.id,JSON.stringify(contacto));
    location.reload();
}

const cargarContactos = (localStorage, parentNode) => {
    let claves = Object.keys(localStorage);
    claves.forEach(clave => {
        //JSON.parse() lo opuesto a JSON.stringify()
        let contacto = JSON.parse(localStorage.getItem(clave));

        crearContacto(parentNode, contacto, localStorage)
    });
}

const crearContacto = (parentNode, contacto) => {
    //creamos los elementos html de cada propiedad
    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let borrarContacto = document.createElement('i');

    //insertamos los datos de los input en los elementos creados
    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;    
    borrarContacto = document.createElement ('i');

    //agregamos las clases a los elementos
    divContacto.classList.add('contacto');
    borrarContacto.classList.add('btn-borrar','fas','fa-trash');

    //insertamos los elementos html creados dentro de div.contacto
    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(borrarContacto);

    //insertamos el div.contacto dentro del contenedor padre (section.listado)
    parentNode.appendChild(divContacto);
    
    contadorContacto();
    funcionBorrar(borrarContacto, contacto)
}

const contadorContacto = () => {
    numeroContador++;
    contador.innerHTML = `Mis contactos (${numeroContador})`;
}

const funcionBorrar = (borrarContacto, contacto) => {
    borrarContacto.addEventListener('click', function() {
        Swal.fire({
            icon: 'warning',
            text: `¿estas seguro que quieres borrar el contacto ${contacto.nombre}?`,
            confirmButtonColor: '#d33',
            showCancelButton: true,
            cancelButtonColor: '#118ab2',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Borrar'
        }).then((resultado) => {
            if (resultado.isConfirmed) {
                localStorage.removeItem(contacto.id);
                Swal.fire(
                    'Contacto eliminado!',
                    `el contacto ${contacto.nombre} se eliminó correctamente.`,
                    'success',
                ).then(() => {
                    location.reload()
                })
            }
        })
    });
} 