let listaContactos = [
  {
    id: 1,
    nombres: "Carlos",
    apellidos: "Sanchez",
    telefono: "555-1234",
    ubicaciones: "Colombia",
    ciudad: "Bogota",
    direccion: "kr 3 21-12"
  },
  {
    id: 2,
    nombres: "Andres",
    apellidos: "Lopez",
    telefono: "555-5678",
    ubicaciones: "Colombia",
    ciudad: "Bogota",
    direccion: "kr 3 21-12"
  }
];

function imprimirContactos() {
  const contactListDiv = document.getElementById("contactList");
  contactListDiv.innerHTML = "";

  listaContactos.forEach(contacto => {
    const contactoDiv = document.createElement("div");
    contactoDiv.classList.add("contact-item");
    contactoDiv.innerHTML = `
      <span>${contacto.nombres}</span>
      <span>${contacto.telefono}</span>
      <span>${contacto.ubicaciones}</span>
      <span>${contacto.ciudad}</span>
      <span>${contacto.direccion}</span>
      <button onclick="borrarContacto(${contacto.id})"><span class="material-symbols-outlined">delete</span></button>
      <button onclick="actualizarContacto(${contacto.id})"><span class="material-symbols-outlined">edit</span></button>
    `;
    contactListDiv.appendChild(contactoDiv);
  });
}

function agregarContacto() {
  const nombreApellidoInput = document.getElementById("nombreApellido");
  const telefonoInput = document.getElementById("telefono");
  const ubicacionesInput = document.getElementById("ubicaciones");
  const ciudadInput = document.getElementById("ciudad");
  const direccionInput = document.getElementById("direccion");

  const nuevoContacto = {
    id: listaContactos.length + 1,
    nombres: nombreApellidoInput.value,
    telefono: telefonoInput.value,
    ubicaciones: ubicacionesInput.value,
    ciudad: ciudadInput.value,
    direccion: direccionInput.value
  };

  listaContactos.push(nuevoContacto);
  imprimirContactos();

  nombreApellidoInput.value = "";
  telefonoInput.value = "";
  ubicacionesInput.value = "";
  ciudadInput.value = "";
  direccionInput.value = "";
}

function borrarContacto(id) {
  listaContactos = listaContactos.filter(contacto => contacto.id !== id);
  imprimirContactos();
}

function actualizarContacto(id) {
  const contactoActualizado = {
    id,
    nombres: "Carlos",
    telefono: "555-5678",
    ubicaciones: "Colombia",
    ciudad: "Bogota",
    direccion: "cl 19a 12-18"
  };

  const index = listaContactos.findIndex(contacto => contacto.id === id);
  if (index !== -1) {
    listaContactos[index] = { ...contactoActualizado, id };
    console.log(`Contacto con ID ${id} actualizado.`);
    imprimirContactos();
  } else {
    console.log(`No se encontró un contacto con ID ${id}.`);
  }
}

imprimirContactos();