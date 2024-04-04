import validator from 'validator';

const validations = {
    email: (value) => {
        return validator.isEmail(value) || 'forms.emailError';
    },
    'new-password': (value) => {
        return validator.isStrongPassword(value, {
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        }) || 'forms.passwordError';
    }
};

/**
 * function inputRules
 * @param {string} name - name of input
 * @param {boolean} required - whether the input is required
 * @param {boolean} disabled - whether the input is disabled
 * @param {boolean} validate - whether the input should be validated
 * @returns {object} object containing the input rules
 */
const inputRules = (name, required, disabled, validate) => {
    return {
        required: { value: required, message: 'forms.requiredError' },
        disabled: disabled,
        validate: {
            [name]: value => {
                return !validate || validations[name](value);
            }
        }
    };
};

export default inputRules;