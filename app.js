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

function agregarContacto() {
  const nombres = document.getElementById("nombres").value;
  const apellidos = document.getElementById("apellidos").value;
  const telefono = document.getElementById("telefono").value;
  const ubicaciones = document.getElementById("ubicaciones").value;
  const ciudad = document.getElementById("ciudad").value;
  const direccion = document.getElementById("direccion").value;

  if (nombres.trim() !== "" && apellidos.trim() !== "") {
    const nuevoContacto = {
      id: listaContactos.length + 1,
      nombres: nombres,
      apellidos: apellidos,
      telefono: telefono,
      ubicaciones: ubicaciones,
      ciudad: ciudad,
      direccion: direccion
    };
    listaContactos.push(nuevoContacto);
    actualizarListaContactos();
    resetForm();
  }
}

function borrarContacto(id) {
  listaContactos = listaContactos.filter(contacto => contacto.id !== id);
  actualizarListaContactos();
}

function resetForm() {
  document.getElementById("nombres").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("ubicaciones").value = "";
  document.getElementById("ciudad").value = "";
  document.getElementById("direccion").value = "";
}

function imprimirContactos() {
  console.log("Lista de contactos:");
  listaContactos.forEach(contacto => console.log(contacto));
}

function actualizarListaContactos() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  listaContactos.forEach(contacto => {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");
    contactItem.innerHTML = `
      <span>${contacto.nombres} ${contacto.apellidos}</span>
      <button onclick="borrarContacto(${contacto.id})"><span class="material-symbols-outlined">
      delete
      </span></button>
    `;
    contactList.appendChild(contactItem);
  });
}

actualizarListaContactos();