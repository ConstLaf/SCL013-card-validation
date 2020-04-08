
const validator = {
    
    isValid: function (creditCardNumber) {
        // Nuestra variable que hara de switch, cuando tenga o no que duplicar
        let hasToDuplicate = false;
        let sum = 0;
        // La suma de cada digito en la variable numeros


        for (let index = creditCardNumber.length - 1; index >= 0; index--) {
            //creditCardNumber.length +1; index <=0; index ++
            // Obtenemos el caracter de en numeros a través de un indice (los caracteres son códigos ASCII)
            let character = creditCardNumber.charAt(index);
            // Convertimos el caracter en un número (los caracteres son códigos ASCII 0=48, 1=49, ..., 9=57)
            let digit = parseInt(character);

            // Si tiene que duplicar
            if (hasToDuplicate) {
                // multiplicamos el digito por 2 y lo actualizamos con su nuevo valor
                digit = digit * 2;
            }

            // Si nuestro dígito tiene un valor mayor a 9, sumamos la decena con la unidad
            //     10 =>  1 + 0 = 1,   11 =>  1 + 1 = 2
            // Esto es lo mismo que restarle 9 al número original
            //  10 => 10 - 9 = 1,   11 => 11 - 9 = 2
            if (digit > 9) {
                digit = digit - 9;
            }

            sum = sum + digit;

            // Invertimos el valor de la variable NEGANDOLA con un ! (signo de exclamacón).
            // true == !false, false == !true
            hasToDuplicate = !hasToDuplicate;
        }

        // El resto de la operación modulo es igual a 0 ?
        return (sum % 10) == 0;

    },

    maskify : function(creditCardNumber) {
        const toOfuscate = creditCardNumber.substr(0, creditCardNumber.length -4);
        const lastFourDigits = creditCardNumber.substr(creditCardNumber.length -4, creditCardNumber.length);

        const ofuscated = toOfuscate.replace(/\d/g, "#");
        return ofuscated + lastFourDigits;

    }
};

//export default validator;

// TODO : Delete
//validator.isValid("4049849606388036");
//validator.maskify("4049849606388036");
/* objeto validator



validator.isValid(creditCardNumber) -->Método
creditCardNumber es un String con el n° de tarjeta a verificar
function creditCardNumber --> Retorna un Boolean si es válida o no, acuerdo al log. de Luhn

validator.maskify(creditCardNumber) --> Método
creditCardNumber es un String con el n° de tarjeta
function creditCardNumber  --> Retorna un String con los números en #, excepto últimos 4 dígitos intactos,
aún cuando el string sea de menor longitud

const validator = {

};

export default validator; */


// array [] */

