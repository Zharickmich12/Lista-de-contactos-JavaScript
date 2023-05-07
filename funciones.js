const guardarContacto = (local, contacto) =>{
    local.setItem(contacto.id, JSON.stringify(contacto))
    location.reload();
}

function validar() {
    console.log('se envio el contacto')
    formulariodatos.reset();
    return false;
}

const cargarContactos = (local, parentNode) =>{
    let claves = Object.keys(local)

    for(clave of claves){
        let contacto = JSON.parse(local.getItem(clave))
        crearContacto(parentNode, contacto, local)
    }
}

const crearContacto = (parentNode, contacto, local) =>{

    let divContacto = document.createElement('div')
    let idContacto = document.createElement('h3')
    let nombreContacto = document.createElement('h3')
    let apellidoContacto = document.createElement('h3')
    let numeroContacto = document.createElement('h3')
    let correoContacto = document.createElement('h3')
    let ciudadContacto = document.createElement('h3')
    let iconoBorrar = document.createElement('span')

    idContacto.innerHTML = contacto.id
    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    numeroContacto.innerHTML = contacto.numero
    correoContacto.innerHTML = contacto.correo
    ciudadContacto.innerHTML = contacto.ciudad
    iconoBorrar.innerHTML = 'delete'
    
    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-symbols-outlined', 'icono')

    iconoBorrar.onclick = () =>{
        local.removeItem(contacto.id)
        location.reload();
    }

    divContacto.appendChild(idContacto)
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(correoContacto)
    divContacto.appendChild(ciudadContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}