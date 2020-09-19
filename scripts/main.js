let miImagen = document.querySelector("img");
miImagen.onclick = function(){
    let miSrc = miImagen.getAttribute("src");
    if (miSrc === "images/donas.jpg") {
        miImagen.setAttribute("src", "images/donas2.jpg");
    
    }else {
        miImagen.setAttribute("src", "images/donas.jpg");
    }

}

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function establecerNombreUsuario(){
    let miNombre = prompt("Por favor ingrese nombre: ");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Mozilla es genial, " + miNombre;
}
if (!localStorage.getItem("nombre")) {
    establecerNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial, "+ nombreAlmacenado;
}
miBoton.onclick = function() {
    establecerNombreUsuario();
}