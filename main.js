const nombre = document.querySelector('.nombre')
const apellido = document.querySelector('.apellido')
const numero = document.querySelector('.numero')
const correo = document.querySelector('.correo')
const ciudad = document.querySelector('.ciudad')
const agregar = document.querySelector('.agregar')

const listatareas = document.querySelector('.listatareas')

const local = window.localStorage

agregar.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        apellido: apellido.value,
        numero: numero.value,
        correo: correo.value,
        ciudad: ciudad.value,
    }
    guardarContacto(local, contacto)
}

cargarContactos(local, listatareas)