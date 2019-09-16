var a = function cargar(){
    var btnGuardar = document.getElementById("btn");
    var btnAgregar = document.getElementById("btnAgregar");
    var btnCerrar = document.getElementById("btnCerrar");

    btnAgregar.addEventListener("click", abrir);
    btnGuardar.addEventListener("click", guardar);
    btnCerrar.addEventListener("click", cerrar);

    abrir(false)

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
        cuerpo.innerHTML += "<tr><td>"+nombre+"</td><td>"+apellido+"</td><td>"+
                "<a href= '' onclick= 'borrar(event)'>borrar</a> <a href= '' onclick= 'editar(event)'>editar</a/td/tr>";
                                                            

    }
}

var aux = "";

function borrar(e){
    e.preventDefault();
    var tagA = e.target;
    var td = tagA.parentNode;
    var tr = td.parentNode;
    
    tr.innerHTML = "";

}


function editar(e){
    e.preventDefault();
    var tagA = e.target;
    var td = tagA.parentNode;
    var tr = td.parentNode;
    aux = tr;
    
    var nombre = tr.children[0].innerHTML;
    var apellido = tr.children[1].innerHTML;
    
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    var btnEditar = document.getElementById("btnEditar");
    var btnGuardar = document.getElementById("btn");
    btnGuardar.hidden = true;
    btnEditar.hidden = false;
    abrir(true);

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    editarDatos();
}



function editarDatos(){
    

    aux.children[0].firstChild.innerHTML = nombre;
    console.log(aux);
}



function modificar(){

}



function abrir(mostrar){
    var contAgregar = document.getElementById("cuadro");
    var btn = document.getElementById("btnAgregar");
    btn.hidden = mostrar;
    contAgregar.hidden = !mostrar;
}



function cerrar(){
    var contAgregar = document.getElementById("cuadro");
    var btn = document.getElementById("btnAgregar");

    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    contAgregar.hidden = true;
    btn.hidden = false;
}

