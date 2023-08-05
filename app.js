let listaContactos = [
  "Zharick Huertas",
  "Joel Pimentel",
  "Andy Fetecua",
  "Matteo Lopez"
];

function agregarContacto() {
  const nombreApellido = document.getElementById("nombreApellido").value;
  if (nombreApellido.trim() !== "") {
    listaContactos.push(nombreApellido);
    actualizarListaContactos();
    document.getElementById("nombreApellido").value = "";
  }
}

function borrarContacto(index) {
  listaContactos.splice(index, 1);
  actualizarListaContactos();
}

function imprimirContactos() {
  console.log("Lista de contactos:");
  listaContactos.forEach(contacto => console.log(contacto));
}

function actualizarListaContactos() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  listaContactos.forEach((contacto, index) => {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");
    contactItem.innerHTML = `
      <span>${contacto}</span>
      <button onclick="borrarContacto(${index})"><span class="material-symbols-outlined">delete</span></button>
    `;
    contactList.appendChild(contactItem);
  });
}

actualizarListaContactos();