var a = function cargar(){
    var btnGuardar = document.getElementById("btn");

    btnGuardar.addEventListener("click", guardar);
}


window.addEventListener("load", a);

function guardar(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;

    if(nombre == "" || apellido == ""){
        document.getElementById('   ').className = "error";
        document.getElementById('apellido').className = "error";
        alert("Error, complete los dos casilleros");
        return;
    }
    else{
        document.getElementById('nombre').className="sinError";
        document.getElementById('apellido').className="sinError";
        
        var cuerpo = document.getElementById('cuerpo');
        cuerpo.innerHTML += "<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+"<a href= '' onclick= 'borrar(event)'>borrar</a</td</tr>";

    }
}


function borrar(e){
    e.preventDefault();
    var tagA = e.target;
    var td = tagA.parentNode;
    var tr = td.parentNode;
    tr.innerHTML = "";
}