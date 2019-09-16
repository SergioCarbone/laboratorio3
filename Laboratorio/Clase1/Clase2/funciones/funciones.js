
var a = function cargar(){
    var boton = document.getElementById("btn");
   // boton.onclick = mostrar;
    boton.addEventListener("click", mostrar); // con addEventListener le podemos agregar mas eventos en la misma linea
}

//se guarda una funcion en una variable y se la pasamos al load para que cuando
//termine de cargar llame a la funcion

//window.onload = a; 

// Si a la variable a le ponemos los parentesis la estamos ejecutando a();

window.addEventListener("load", a);


function mostrar(){
    var usuario = document.getElementById("usr");
    var password = document.getElementById("pass");

    if(usuario.value == "Sergio"){
        if(password.value == "Carbone"){
            alert("Usuario y contraseña correctos");
        }
        else{
            alert("Contraseña incorrecta");
        }
    }
    else{
        alert("Usuario incorrecto");
    }
}

