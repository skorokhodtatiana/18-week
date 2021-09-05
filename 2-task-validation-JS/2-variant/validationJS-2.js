const nameErrors = document.getElementById('nameErrors');
const nameUser = document.getElementById('nameUser');
const buttonSubmit = document.getElementById('buttonSubmit');
const surname = document.getElementById('surname');
const surnameErrors = document.getElementById('surnameErrors');
const numberPhone = document.getElementById('numberPhone');
const phoneErrors = document.getElementById('phoneErrors');
const email = document.getElementById('email');
const emailErrors = document.getElementById('emailErrors');
let inputs = document.querySelectorAll('input:focus');
const userForm = document.getElementById('userForm');
const errors = document.getElementById('errors');
let errorArr = [];

function checkInputValidity(val) {
    errorArr = [];
    let input = val.target;
    let validity = input.validity;
    if (validity.patternMismatch) {
        errorArr.push('Неправильный формат ввода');
    }

    if (validity.valueMissing) {
        errorArr.push('Заполните, пожалуйста, поле' + '\n' + input.name);
    }

    if (validity.rangeUnderflow) {
        errorArr.push('Слишком мало символов' + '\n' + 'в' + '\n' + input.name);
    }

    if (validity.rangeOverflow) {
        errorArr.push('Слишком много символов' + '\n' + 'в' + '\n' + input.name);
    }

    // if(validity.typeMismatch){
    //     errorArr.push('Значение не соответствует указанному атрибуту' + '\n' + input.name);
    // }

    if (validity.tooLong) {
        errorArr.push('Значение' + '\n' + input.name + '\n' + 'слишком длинное');
    }

    if (validity.tooShort) {
        errorArr.push('Значение' + '\n' + input.name + '\n' + 'слишком короткое');
    }
    return errorArr;
}

function checkName(data) {
    let valueNameError = checkInputValidity(data);
    nameErrors.innerText = valueNameError;
}

function cleanErrorsName() {
    errorArr = [];
    nameErrors.innerText = "";
}


function checkSurname(data) {
    let valueSurnameErrors = checkInputValidity(data);
    surnameErrors.innerText = valueSurnameErrors;
}

function cleanErrorsSurname() {
    errorArr = [];
    surnameErrors.innerText = "";
}

function checkNumberPhone(data) {
    let valueNumPhoneErrors = checkInputValidity(data);
    phoneErrors.innerText = valueNumPhoneErrors;
}

function cleanNumPhone() {
    errorArr = [];
    phoneErrors.innerText = "";
}

function checkEmail(data) {
    let valueEmailErrors = checkInputValidity(data);
    emailErrors.innerText = valueEmailErrors;
}

function cleanErrorsEmail() {
    errorArr = [];
    emailErrors.innerText = "";
}

function checkEmpty() {
    console.log(inputs.value);
    // if (inputs != "") {
    //     errors.innerText = 'Заполните, пожалуйста, все поля';
    // } else {
    //     errors.innerText = ""
    // };
    if (inputs !== 4) {
        errors.innerText = 'Заполните, пожалуйста, все поля';
    } else {
        errors.innerText = ""
    };
}

nameUser.addEventListener('blur', checkName);
nameUser.addEventListener('click', cleanErrorsName);

surname.addEventListener('blur', checkSurname);
surname.addEventListener('click', cleanErrorsSurname);

numberPhone.addEventListener('blur', checkNumberPhone);
numberPhone.addEventListener('click', cleanNumPhone);

email.addEventListener('blur', checkEmail);
email.addEventListener('click', cleanErrorsEmail);

buttonSubmit.addEventListener('click', checkEmpty);

buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault();
})