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
    let nombreContacto = document.createElement('h3')
    let apellidoContacto = document.createElement('h3')
    
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    
    iconoBorrar.innerHTML = 'delete'
    
    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-symbols-outlined', 'icono')

    iconoBorrar.onclick = () =>{
        local.removeItem(contacto.id)
        location.reload();
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}