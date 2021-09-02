const comment = document.getElementById('textArea');
const submitComment = document.getElementById('submitComment');
let allComments = [];

function processingComments() {
    let userComment = getComments();
    let resultCorrectComment = checkSpam(userComment);
    let setShowComments = setComments(resultCorrectComment);
    cleanInput(setShowComments);
}

function getComments() {
    let newComment = comment.value;
    return newComment;
}

function checkSpam(newComment) {

    let correctComment = newComment.replace(/viagra/ig, '***').replace(/xxx/ig, '***');
    console.log(allComments.push(correctComment));
    console.log(allComments);

    let stringCorrectComment = allComments.join();
    console.log(stringCorrectComment);
    localStorage.setItem('keyComment', stringCorrectComment);

    return correctComment;
}

function setComments(correctComment) {
    let divComment = document.getElementById('showComments');
    divComment.innerHTML += `<br/> ${correctComment}`;

    // if (localStorage.getItem('keyComment') === 0) {
    //      localStorage.setItem('keyComment', comment);
    //  }
}

function cleanInput() {
    comment.value = "";
}

submitComment.addEventListener('click', function (event) {
    event.preventDefault();
    processingComments();
});

// document.addEventListener('DomContentLoaded', function (event) {
//     let userComment = localStorage.getItem('keyComment');
//     //console.log(userComment);
//     if (!userComment) {
//         userComment = correctComment;
//     }
// })



// const comment = document.getElementById('textArea');
// const submitComment = document.getElementById('submitComment');
// let allComments = [];

// function processingComments() {
//     let userComment = getComments();
//     let resultCorrectComment = checkSpam(userComment);
//     let setShowComments = setComments(resultCorrectComment);
//     cleanInput(setShowComments);

// }

// function getComments() {
//     let newComment = comment.value;
//     let valueAllComments = allComments.push(newComment);
//     return valueAllComments;
// }

// function checkSpam(newComment) {
//     let correctComment = newComment.replace(/viagra/ig, '***').replace(/xxx/ig, '***');


//         localStorage.setItem('keyComment', correctComment);


//     return correctComment;
// }

// function setComments(correctComment) {
//     let divComment = document.getElementById('showComments');
//     divComment.innerHTML += `<br/> ${correctComment}`;

// }

// function cleanInput() {
//     comment.value = "";
// }

// submitComment.addEventListener('click', function(event){
//     event.preventDefault();
//     processingComments();
// });

// document.addEventListener('DomContentLoaded', function(event){
//     let userComment = localStorage.getItem('keyComment');
//     console.log(userComment);
//     if(!userComment){
//         userComment = correctComment;
//     }
// })