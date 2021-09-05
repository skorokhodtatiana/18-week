const errorMessage = document.getElementById('errorMessage');
const userForm = document.getElementById('userForm');
let inputs = document.querySelectorAll('input');
let errorArr = [];

function checkInputValidity(input) {
    let validity = input.validity;
    if (validity.patternMismatch) {
        errorArr.push('Неправильный формат ввода' + '\n' + input.name);
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

    if (validity.tooLong) {
        errorArr.push('Значение' + '\n' + input.name + '\n' + 'слишком длинное');
    }

    if (validity.tooShort) {
        errorArr.push('Значение' + '\n' + input.name + '\n' + 'слишком короткое');
    }
}

function checkInputs() {
     errorArr = [];
     errorMessage.innerHTML = "";

    for (input of inputs) {
        checkInputValidity(input);
    }
    errorMessage.innerHTML = errorArr.join('<br>')
}

function cleanErrorMessage(){
    errorMessage.innerHTML ="";
}

userForm.addEventListener('submit', function (event) {
    event.preventDefault();

    checkInputs();
});

userForm.addEventListener('change', cleanErrorMessage);
