const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const sign_in_btn2 = document.querySelector('#sign-in-btn2');
const sign_up_btn2 = document.querySelector('#sign-up-btn2');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

sign_up_btn2.addEventListener('click', () => {
    container.classList.add('sign-up-mode2');
});

sign_in_btn2.addEventListener('click', () => {
    container.classList.remove('sign-up-mode2');
});

//form validation:

const form1 = document.querySelector('.sign-in-form');
const form2 = document.querySelector('.sign-up-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const eMail = document.querySelector('#Email');
const siUsername = document.querySelector('#siUsername');
const siPassword = document.querySelector('#siPassword');


form1.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

form2.addEventListener('submit', (event) => {
    event.preventDefault();
    validateInputs();
});


function validateInputs() {
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();
    const eMailVal = eMail.value.trim();
    const siUsernameVal = siUsername.value.trim();
    const siPasswordVal = siPassword.value.trim();

    if (usernameVal === '') {
        setErrorForField(username, 'Username is required');
    }
    else {
        setSuccessForField(username);
    }

    
    if (passwordVal === '') {
        setErrorForField(password, 'Password is required');
    }
    else if (!validatePassword(passwordVal)) {
        setErrorForField(password, 'Enter a Strong Password');
    }
    else {
        setSuccessForField(password);
    }


    if (eMailVal === '') {
        setErrorForField(eMail, 'E-Mail is required');
    }
    else if (!validateEmail(eMailVal)) {
        setErrorForField(eMail, 'Enter a valid E-Mail');
    }
    else {
        setSuccessForField(eMail);
    }


    if (siUsernameVal === '') {
        setErrorForField(siUsername, 'Username is required');
    }
    else {
        setSuccessForField(siUsername);
    }

    
    if (siPasswordVal === '') {
        setErrorForField(siPassword, 'Password is required');
    }
    else if (!validatePassword(siPasswordVal)) {
        setErrorForField(siPassword, 'Enter a Strong Password');
    }
    else {
        setSuccessForField(siPassword);
    }


};


function setErrorForField(element, errorMessage) {
    const errorContainer = element.closest('.error-contain');
    const errorElement = errorContainer.querySelector('.error');

    errorElement.innerText = errorMessage;
}

function setSuccessForField(element) {
    const errorContainer = element.closest('.error-contain');
    const errorElement = errorContainer.querySelector('.error');

    errorElement.innerText = '';
}


const validatePassword = (password) => {
    return String(password).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
};

const validateEmail = (email) => {
    return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};
