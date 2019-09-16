 var nombre;
        nombre = "Sergio";
        
        // if(nombre == "Sergio"){
        //     alert("el nombre es Sergio");
        // }
        // else{
        //     alert("No es Sergio");
        // }
         // esto esta mal, no puedo llamar a una funcion que todavia no esta declarada
        console.log(sumar(1,2));

        function sumar( num1, num2){
            return num1+num2;
            alert(num1+num2);
        }

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
        
        