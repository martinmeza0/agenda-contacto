const guardarContacto = (db, contacto) => {
    //JSON.stringify() convierte un objeto en una cadena de texto JSON
    db.setItem(contacto.id,JSON.stringify(contacto));
    location.reload();
}

const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db);
    claves.forEach(clave => {
        //JSON.parse() lo opuesto a JSON.stringify()
        let contacto = JSON.parse(db.getItem(clave));

        crearContacto(parentNode, contacto, db)
    });
}
const borrarContactos = (db, contacto) => {
    db.removeItem(contacto.id);
    location.reload();
}
const crearContacto = (parentNode, contacto, db) => {
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
    
    borrarContacto.onclick = () => {
        db.removeItem(contacto.id);
        location.reload();
    };
}

    


// {/* <div class="contacto">
// <h3>Nombre</h3>
// <p>Numero</p>
// <p>Direccion</p>
// <button class="btn-borrar"><i class="fas fa-trash"></i></button>
// </div> */}