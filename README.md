# Lista de Contactos en JavaScript

Este proyecto es una lista de contactos implementada en JavaScript, que permite añadir, eliminar, actualizar e imprimir contactos en la consola.

## Instrucciones de uso

1. Para añadir un nuevo contacto, completa los campos en el formulario y haz clic en el botón "Agregar".

2. Para eliminar un contacto existente, haz clic en el ícono de "delete" junto al contacto que deseas eliminar.

3. Para actualizar un contacto existente, haz clic en el ícono de "Actualizar" junto al contacto que deseas modificar y se actualizará con los datos predefinidos.

4. Para imprimir los contactos en la consola, simplemente verás la lista actualizada en la sección correspondiente.

## Estructura del código

El código está organizado de la siguiente manera:

- `index.html`: Contiene la estructura HTML de la página.
- `styles.css`: Archivo de estilos CSS para dar formato a la interfaz.
- `app.js`: Archivo JavaScript con la implementación de la lista de contactos.

## Datos predefinidos

He predefinido algunos contactos para que puedas tener una lista inicial.

## Funciones implementadas

- `agregarContacto(contacto)`: Añade un nuevo contacto a la lista. El parámetro `contacto` debe ser un objeto con los campos `id`, `nombres`, `apellidos`, `telefono`, `ubicaciones`, `ciudad` y `direccion`.
- `borrarContacto(id)`: Elimina un contacto existente de la lista basado en su ID.
- `actualizarContacto(id, nuevoContacto)`: Actualiza un contacto existente en la lista con los datos proporcionados en `nuevoContacto`. El parámetro `nuevoContacto` debe ser un objeto con los campos actualizados.
- `imprimirContactos()`: Muestra en la consola todos los contactos presentes en la lista.


