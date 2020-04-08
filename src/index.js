
//import validator from "./validator.js"; 
//console.log(validator);

//función del botón volver
document.getElementById("goBack").addEventListener("click", volverInicio);

//botón iniciar
document.getElementById("iniciar").addEventListener("click", validaPage);

// TODO : Preguntar por modulos, imports, node
//función isValid a botón Validar
document.getElementById("validate").addEventListener("click", displayValidator);
    
    function displayValidator () {

        if (validator.isValid(creditCardNumber)) {
            let success = document.getElementById("exito").innerText = success;
            success.style.display = "block";
            success.style.color='green';
        } else {
            let failure = document.getElementById("noExito").innerHTML = failure;
            failure.style.display = "block";
            failure.style.color= 'red';
        }
    }
    
function validaPage(){
    document.getElementById("iniciar").addEventListener("click", validaPage);    

    const nextPage = document.getElementById("validar_tarjeta");    
    nextPage.style.display= "block";

    const currentPage = document.getElementById("pag_Bienvenida");
    currentPage.style.display = "none";

    const validPage = document.getElementById("tarjeta_valida");
    validPage.style.display = "none";

    const invalidPage = document.getElementById("tarjeta_No_valida");
    invalidPage.style.display = "none";
}

function volverInicio(){
    
    const firstPage = document.getElementById("pag_Bienvenida");
    firstPage.style.display= "block";

    const currentPage = document.getElementById("validar_tarjeta");
    currentPage.style.display = "none";

    const validPage = document.getElementById("tarjeta_valida");
    validPage.style.display = "none";

    const invalidPage = document.getElementById("tarjeta_No_valida");
    invalidPage.style.display = "none";

}




//función del botón validar

//función del botón vuelve a intentarlo --> clearBuscar en el form (reset)