const errorMessage = document.getElementById('errorMessage');
// const buttonSubmit = document.getElementById('buttonSubmit');
const userForm = document.getElementById('userForm');
let errorArr = [];

function checkInputValidity(input) {
    //errorArr = [];
    let validity = input.validity;
    if (validity.patternMismatch) {
        errorArr.push('Неправильный формат ввода' + '\n' + input.name);
    }

    if (validity.valueMissing) {
        errorArr.push('Заполните, пожалуйста, поле' + '\n' + input.name);
    }
    console.log(errorArr);
}

function checkInputs() {
    //let errorArr = [];

    let inputs = document.querySelectorAll('input');

    for (input of inputs) {
        checkInputValidity(input);
    }
    errorMessage.innerHTML = errorArr.join('<br>')
}

function cleanErrorMessage(){
   // let errorArr = [];
    errorMessage.innerHTML ="";
}

userForm.addEventListener('submit', function (event) {
    event.preventDefault();

    checkInputs();
});

userForm.addEventListener('change', cleanErrorMessage);
