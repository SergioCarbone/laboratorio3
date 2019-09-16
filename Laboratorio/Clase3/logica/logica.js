var a = function cargar() {
    var btnGuardar = document.getElementById("btn");

    btnGuardar.addEventListener("click",agregar);
}


window.addEventListener("load", a);

function agregar() {

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    if(nombre == "" || apellido == ""){
        document.getElementById("nombre").className = "error";
        document.getElementById("apellido").className = "error";
        alert("Debe ingresar Nombre y Apellido");
        return;
    }

    var respuesta = confirm("Desea ingresar esta persona?");
    if(respuesta){
        document.getElementById("nombre").className = "sinError";
        document.getElementById("apellido").className = "sinError";
        var tCuerpo = document.getElementById("cuerpo");

        tCuerpo.innerHTML += "<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+"<a href= '' onclick= 'borrar(event)'>borrar</a</td></tr>";
    }
}

function borrar(e) {
    e.preventDefault();
    var tagA = e.target;
    var td = tagA.parentNode; //td
    var tr = td.parentNode; //tr
    tr.innerHTML="";
}




