import { validator } from "./validator.js";
console.log(validator);
//import validator from "./validator.js"; -->  No funciona


//función del botón volver
document.querySelectorAll('.goBack').forEach(function(button) {
    button.addEventListener("click", volverInicio);
}) 

//document.getElementsByClassName('.goBack').addEventListener("click", volverInicio);--> No funciona así
//document.getElementById("goBack").addEventListener("click", volverInicio);--> No funciona así

//botón iniciar
document.getElementById("iniciar").addEventListener("click", validaPage);

// TODO : Preguntar por modulos, node
document.getElementById("validate").addEventListener("click", displayValidator);

document.getElementById("tryAgain").addEventListener("click", tryAgainPage);

function displayValidator() {
    const creditCardNumber = document.getElementById("cardNumber").value;

    if (validator.isValid(creditCardNumber)) {
        let success = document.getElementById("tarjeta_valida");
        success.style.display = 'block';
        
        const succesBeMasked = document.getElementById("maskifiedNumber");
        succesBeMasked.innerHTML = validator.maskify(creditCardNumber);

    } else {
        let failure = document.getElementById("tarjeta_no_valida");
        failure.style.display = 'block';
        
    }

    document.getElementById('validar_tarjeta').style.display = 'none';
}

//Botón Inicio
function validaPage() {
    const nextPage = document.getElementById("validar_tarjeta");
    nextPage.style.display = 'block';

    const currentPage = document.getElementById("pag_Bienvenida");
    currentPage.style.display = 'none';

    const validPage = document.getElementById("tarjeta_valida");
    validPage.style.display = 'none';

    const invalidPage = document.getElementById("tarjeta_no_valida");
    invalidPage.style.display = 'none';
}


//Botón Intentar de nuevo
function tryAgainPage() {
    
    const validatePage = document.getElementById("validar_tarjeta");
    validatePage.style.display = 'block';
    
    const currentPage = document.getElementById("tarjeta_no_valida");
    currentPage.style.display = 'none';

    const validPage = document.getElementById("tarjeta_valida");
    validPage.style.display = "none";

    const firstPage = document.getElementById("pag_Bienvenida");
    firstPage.style.display = 'none';
}

//Botón Volver
function volverInicio() {
    const firstPage = document.getElementById("pag_Bienvenida");
    firstPage.style.display = 'block';

    const currentPage = document.getElementById("validar_tarjeta");
    currentPage.style.display = 'none';

    const validPage = document.getElementById("tarjeta_valida");
    validPage.style.display = 'none';

    const invalidPage = document.getElementById("tarjeta_no_valida");
    invalidPage.style.display = 'none';
}




//función del botón validar

//función del botón vuelve a intentarlo --> clearBuscar en el form (reset)