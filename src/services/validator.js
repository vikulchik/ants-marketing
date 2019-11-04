var REG_EXP = {
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ONLY_ENGLISH_LETTER: /^[a-zA-Z]+$/,
    ONLY_ENGLISH_LETTER_OR_SPACE: /^[a-zA-Z ]+$/,
    ONLY_PHONE_NUMBER: /^\+?3?8?(0[5-9][1-8]\d{7})$/,
    ONLY_ENGLISH_LETTER_OR_NUMBERS: /^[a-zA-Z0-9]+$/
}

function validateMinValue(value, min) {
    return value < min;
}

function validateMaxValue(value, max) {
    return value > max;
}

function validateEmail(email) {
    return REG_EXP.EMAIL.test(email.toLowerCase());
}

function validateOnlyEnglishLetter(value) {
    return REG_EXP.ONLY_ENGLISH_LETTER.test(value.toLowerCase());
}

function validateOnlyEnglishLetterOrSpace(value) {
    return REG_EXP.ONLY_ENGLISH_LETTER_OR_SPACE.test(value.toLowerCase());
}

function validatePhoneNumber(value) {
    return REG_EXP.ONLY_PHONE_NUMBER.test(value.toLowerCase());
}

function validateEnglishLettersOrNumbers(value) {
    return REG_EXP.ONLY_ENGLISH_LETTER_OR_NUMBERS.test(value.toLowerCase());
}

export default {
    validateMinValue,
    validateMaxValue,
    validateEmail,
    validateOnlyEnglishLetter,
    validateOnlyEnglishLetterOrSpace,
    validatePhoneNumber,
    validateEnglishLettersOrNumbers,
}