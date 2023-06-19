const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, password}),
        });
        if(response.ok) {
            document.location.replace('/');
        } else {
            alert("login failed");
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault()
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, password})
        });
        if(response.ok){
            document.location.replace('/');
        } else {
            alert('sign up failed')
        }
    }
}

document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler)

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler)