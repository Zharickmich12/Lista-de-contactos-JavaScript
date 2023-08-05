# Lista de Contactos en JavaScript

Este proyecto es una lista de contactos implementada en JavaScript, que permite añadir, eliminar e imprimir contactos en la consola.

## Instrucciones de uso

1. Para añadir un nuevo contacto, llama a la función `agregarContacto(contacto)` pasando un objeto con la siguiente estructura:
   ```javascript
   {
     id: number,         // ID del contacto (número entero)
     nombres: string,    // Nombres del contacto (cadena de caracteres)
     apellidos: string,  // Apellidos del contacto (cadena de caracteres)
     telefono: string,   // Teléfono del contacto (cadena de caracteres)
     ubicaciones: string, // Ubicaciones del contacto (cadena de caracteres)
     ciudad: string,     // Ciudad del contacto (cadena de caracteres)
     direccion: string   // Dirección del contacto (cadena de caracteres)
   }
   
2. Para eliminar un contacto existente, llama a la función borrarContacto(id) pasando el ID del contacto que deseas eliminar.

3. Para imprimir los contactos en la consola, simplemente llama a la función imprimirContactos().

## Estructura del código

El código está organizado de la siguiente manera:

- `index.html`: Contiene la estructura HTML de la página.
- `styles.css`: Archivo de estilos CSS para dar formato a la interfaz.
- `app.js`: Archivo JavaScript con la implementación de la lista de contactos.

## Datos predefinidos

He predefinido algunos contactos para que puedas tener una lista inicial.

## Funciones implementadas

- `agregarContacto(nombreApellido)`: Añade un nuevo contacto a la lista con el nombre y apellido proporcionados.
- `borrarContacto(index)`: Elimina un contacto existente de la lista basado en su índice.
- `imprimirContactos()`: Muestra en la consola todos los contactos presentes en la lista.