
//export default validator;--> No funciona

const validator = {

    isValid: function (creditCardNumber) {    
        let hasToDuplicate = false; //interruptor ON/OFF. Permite multiplicar en las posiciones pares
        let sum = 0;                //suma de los carácteres final
        
        for (let index = creditCardNumber.length - 1; index >= 0; index--) { // itera del último hacia el primeroN°[0-n]
            let character = creditCardNumber.charAt(index);                 //index se actualiza dependiendo del número
            let digit = parseInt(character);

            if (hasToDuplicate) {
                digit = digit * 2;
            }

            if (digit > 9) {
                digit = digit - 9;
            }

            sum = sum + digit;

            hasToDuplicate = !hasToDuplicate;
        }

        return (sum % 10) == 0;

    },

    maskify: function (creditCardNumber) {
        const toOfuscate = creditCardNumber.substr(0, creditCardNumber.length - 4); //substr extrae parte del string y retorna el N° específico
        const lastFourDigits = creditCardNumber.substr(creditCardNumber.length - 4, creditCardNumber.length); //"copia" de los últimos 4 dígitos

        const ofuscated = toOfuscate.replace(/\d/g, "#"); 
        return ofuscated + lastFourDigits;
    }
};

export default validator;

//validator.isValid("4049849606388036");
//validator.maskify("4049849606388036");
