
    let buttonSubmit = document.getElementById('buttonSubmit');
    buttonSubmit.addEventListener('submit', function preventSubmit(event){
        event.preventDefault();
        fetch('https://httpbin.org/post', {
            method: 'POST'
            
        })
    })
