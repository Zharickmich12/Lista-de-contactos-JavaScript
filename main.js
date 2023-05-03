const nombre = document.querySelector('.nombre')
const apellido = document.querySelector('.apellido')

const listatareas = document.querySelector('.listatareas')

const local = window.localStorage

agregar.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        apellido: apellido.value,
    }
    guardarContacto(local, contacto)
}

cargarContactos(local, listatareas)