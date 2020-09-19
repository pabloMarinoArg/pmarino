let miImagen = document.querySelector("img");
miImagen.onclick = function(){
    let miSrc = miImagen.getAttribute("src");
    if (miSrc === "images/donas.jpg") {
        miImagen.setAttribute("src", "images/donas2.jpg");
    
    }else {
        miImagen.setAttribute("src", "images/donas.jpg");
    }

}

