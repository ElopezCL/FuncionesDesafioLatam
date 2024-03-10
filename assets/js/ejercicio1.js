document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');

    const nombreInput = document.getElementById('nombre');
    const asuntoInput = document.getElementById('asunto');
    const mensajeInput = document.getElementById('mensaje');

    const errNombre = document.querySelector('.errorNombre');
    const errAsunto = document.querySelector('.errorAsunto');
    const errMensaje = document.querySelector('.errorMensaje');

    const msjResultado = document.querySelector('.resultado');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); 
      const regex = /^[a-zA-Z]+$/;
      const nombre = nombreInput.value.trim();
      const asunto = asuntoInput.value.trim();
      const mensaje = mensajeInput.value.trim();  

      if (!regex.test(nombre)) {
        errNombre.textContent = 'Error: El Nombre es requerido';
      } else if(!regex.test(asunto)){
        errAsunto.textContent = 'Error: El Asunto es requerido';
     } else if(!regex.test(mensaje)){
        errMensaje.textContent = 'Error: El Mensaje es requerido';
     }else {
      
        errNombre.textContent = "";
        errAsunto.textContent = "";
        errMensaje.textContent = "";
        msjResultado.textContent = 'Mensaje Enviado con exito!';
      }
    });
  });