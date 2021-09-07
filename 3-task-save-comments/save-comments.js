const comment = document.getElementById('textArea');
const submitComment = document.getElementById('submitComment');
let userName = document.getElementById('userName');
let urlPhoto = document.getElementById('urlPhoto');
let photoUser = document.getElementById('photoUser');
let allComments = [];

function processingComments() {
    let userComment = getComments();
    let resultCorrectComment = checkSpam(userComment);
    setKeyComment(resultCorrectComment);
    let divShowComments = showComments(resultCorrectComment);
    cleanInput(divShowComments);
    setName();
}

function getComments() {
    let newComment = comment.value;
    return newComment;
}

function checkSpam(newComment) {
    let correctComment = newComment.replace(/viagra/ig, '***').replace(/xxx/ig, '***');
    allComments.push(correctComment);
    return correctComment;
}

function setKeyComment(correctComment) {
    let stringCorrectComment = allComments.join();
    localStorage.setItem('keyComment', stringCorrectComment);
}

function showName() {
    let getItemName = localStorage.getItem('name');
        if (getItemName) {
        userName.value = getItemName;
    }
}

function setName() {
    let newName = userName.value;
    localStorage.setItem('name', newName);
}


function showComments(correctComment) {
    let divComment = document.getElementById('showComments');
    divComment.innerHTML += `<br/> ${correctComment}`;
}

function cleanInput() {
    comment.value = "";
}

function setURL() {
    photoUser.src = urlPhoto.value;
    if(urlPhoto.value){
    localStorage.setItem('url', urlPhoto.value);}
}

function showPhoto() {
    let getItemURL = localStorage.getItem('url');
         if (getItemURL) {
        photoUser.src = getItemURL;
    }
}

submitComment.addEventListener('click', function (event) {
    event.preventDefault();
    processingComments();
});

urlPhoto.addEventListener('change', setURL);

document.addEventListener("DOMContentLoaded", function () {
    let valueLocalStorageComment = localStorage.getItem('keyComment');
    if (valueLocalStorageComment) {
        allComments.push(valueLocalStorageComment);
    }
    showName();
    showPhoto();
});