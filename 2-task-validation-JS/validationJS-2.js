const nameErrors = document.getElementById('nameErrors');
const nameUser = document.getElementById('nameUser');
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

    console.log(errorArr);
    return errorArr;
}

function checkName(data) {
    // nameErrors.innerText = "";
    let valueNameError = checkInputValidity(data);
    nameErrors.innerText = valueNameError;
}

function clearErrors(){
    errorArr = []; 
    nameErrors.innerText = "";
}

nameUser.addEventListener('blur', checkName);
 nameUser.addEventListener('click', clearErrors);