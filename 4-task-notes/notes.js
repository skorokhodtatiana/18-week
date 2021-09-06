const buttonSubmit = document.getElementById('buttonSubmit');
const textNotes = document.getElementById('textNotes');
const fieldForDate = document.getElementById('fieldForDate');
const titleNote = document.getElementById('titleNote');

function showDate() {
    let newDate = new Date();
    let formatNewDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), newDate.getHours(), newDate.getMinutes());
    if (newDate.getMonth() < 10) {
        monthFormat = ("0" + (Number(newDate.getMonth()) + +1));
    }

    if (newDate.getDate() < 10) {
        dateFormat = ("0" + newDate.getDate());
    }
    fieldForDate.innerHTML = dateFormat + "." + monthFormat + "." + newDate.getFullYear() + " " + newDate.getHours() + ":" + newDate.getMinutes();
    return formatNewDate;
}

function setNotes() {
    localStorage.setItem(titleNote.value, textNotes.value);
}

function checkForm() {
    if (titleNote.value != "" && textNotes.value != "") {
        return true;
    } else
        return false;
}

function cleanForm() {
    titleNote.value = "";
    textNotes.value = "";
}

buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    if (checkForm()) {
        setNotes();
        cleanForm();
    } else
        alert("Заполните все поля!");
})

titleNote.addEventListener('click', showDate);