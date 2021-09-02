const comment = document.getElementById('textArea');
const submitComment = document.getElementById('submitComment');
let userName = document.getElementById('userName');
let allComments = [];

function processingComments() {
    let userComment = getComments();
    let resultCorrectComment = checkSpam(userComment);
    setKey(resultCorrectComment);
    let setShowComments = setComments(resultCorrectComment);
    cleanInput(setShowComments);
    setName();
}

function getComments() {
    let newComment = comment.value;
    return newComment;
}

function showName(newName) {
    let getItemName = localStorage.getItem('name');
    if (getItemName !== null) {
        userName.value = getItemName;
    }
}

function setName() {
    let newName = userName.value;
    if (localStorage.getItem('name') === null) {
        localStorage.setItem('name', newName);
    }
}

function checkSpam(newComment) {
    let correctComment = newComment.replace(/viagra/ig, '***').replace(/xxx/ig, '***');
    allComments.push(correctComment);
    return correctComment;
}

function setKey(correctComment) {
    let stringCorrectComment = allComments.join();
    localStorage.setItem('keyComment', stringCorrectComment);
}

function setComments(correctComment) {
    let divComment = document.getElementById('showComments');
    divComment.innerHTML += `<br/> ${correctComment}`;
}

function cleanInput() {
    comment.value = "";
}

submitComment.addEventListener('click', function (event) {
    event.preventDefault();
    processingComments();
});

document.addEventListener("DOMContentLoaded", showName());