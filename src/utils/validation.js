// Utils
import keys from './keys';

const REGEX_AVAILABLE = {
    EMAIL: "^([\-A-Za-z0-9_\.])+\@([\-A-Za-z0-9_])+([\.]{1})([A-Za-z]{2,4})$",
    PAN: "^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$",
    AADHAR: "(^\\d{12}$)|(^\\d{4}-\\d{4}-\\d{4}$)|(^\\d{4} \\d{4} \\d{4}$)",
    GST: "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$",
    IFSC: "^[a-zA-Z]{4}0[0-9a-zA-Z]{6}",
    ONLY_NUM: "^[0-9]*$",
    ONLY_ALPHA: "^[A-Za-z]+$",
    ALPHA_NUMERIC: "^[a-zA-Z0-9]",
    ALPHA_SPACE: "^^[A-Za-z0-9 ]+$",
    ADDRESS: "^[-a-zA-Z0-9, ]",
};

const ValidationUtil = {
    isValidValue : (value) => {
        return value && value.length > 0;
    },
    isExceedingMaxLength : (value, maxLength) => {
        return ValidationUtil.isValidValue(value) && value.length > maxLength ? value.substring(0, maxLength) : value ;
    },
    isValidInput : (value, validationType, minLength) => {
        return ValidationUtil.isValidValue(value) && value.length >= minLength ? new RegExp(REGEX_AVAILABLE[validationType.toUpperCase()]).test(value) : false;
    },
    getValidatedValue : (value, validationType) => {
        if( ValidationUtil.isValidValue(value) ){
            switch (validationType) {
                case keys.validationKeys.ALPHA_NUMERIC:
                    value = value.replace(/[^\w]/, '');
                    break;

                case keys.validationKeys.ALPHA_SPACE:
                    value = value.replace(/[^\w\d\s]/, '');
                    break;
    
                case keys.validationKeys.EMAIL:
                    value = value.replace(/[^\w\@\-\.]/, "");
                    break;
    
                case keys.validationKeys.ADDRESS:
                    value = value.replace(/[^\w\s\-\,]/, "");
                    break;
    
                case keys.validationKeys.DIGITS:
                    value = value.replace(/[^\d]/, "");
                    break;
            
                default:
                    value = value.replace(/[^\d]/, "");
                    break;
            }   
        }
        return value;
    }
}

export default ValidationUtil;