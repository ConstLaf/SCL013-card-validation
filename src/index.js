/*import validator from "./validator.js"; 
console.log(validator);*/


//botón iniciar
document.getElementById("iniciar").addEventListener("click", validaPage);

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

//función del botón volver
document.getElementById("goBack").addEventListener("click", volverInicio);

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