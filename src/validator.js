
//export default validator;--> No funciona

const validator = {

    isValid: function (creditCardNumber) {    
        let hasToDuplicate = false;
        let sum = 0;
        
        for (let index = creditCardNumber.length - 1; index >= 0; index--) {
            let character = creditCardNumber.charAt(index);
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
        const toOfuscate = creditCardNumber.substr(0, creditCardNumber.length - 4);
        const lastFourDigits = creditCardNumber.substr(creditCardNumber.length - 4, creditCardNumber.length);

        const ofuscated = toOfuscate.replace(/\d/g, "#");
        return ofuscated + lastFourDigits;
    }
};

export {validator};

//validator.isValid("4049849606388036");
//validator.maskify("4049849606388036");
