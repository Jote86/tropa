let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === "imagenes/gesell.jpg") {
      miImage.setAttribute('src',"imagenes/geton1.jpg");
    } else {
      miImage.setAttribute('src', "imagenes/gesell.jpg");
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h2');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = "Hola " + miNombre + ", bienvenido a la página de LA TROPA";
    }
  }
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = "Hola " + nombreAlmacenado + ", bienvenido a la página de LA TROPA";
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}
