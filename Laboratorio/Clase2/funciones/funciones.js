var a = function cargar(){
    var btnSumar = document.getElementById("sumar");
    var btnSumarYguardar = document.getElementById("sumarYGuardar");

    btnSumar.addEventListener("click", sumar);
    btnSumarYguardar.addEventListener("click", sumarYguardar);
}

window.addEventListener("load", a);


function sumar(){
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

    var resultado = document.getElementById("resultado");

    var suma = parseInt(num1.value) + parseInt(num2.value);
    resultado.value = suma;
}



function sumarYguardar(){
    sumar();
    
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var resultado = document.getElementById("resultado");

    var tabla = document.getElementById("tabla");
    tabla.innerHTML += "<tr><td>" + num1.value + "</td><td>" +
                       num2.value + "</td><td>" + resultado.value + "</td></tr>";
}