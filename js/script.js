//contact us form validator
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const msg = document.querySelector("#message");

const contactForm = document.querySelector(".contactForm");


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const msgValue = msg.value.trim();

    if(fullNameValue === ''){
        //show error
        //add error class
        setErrorFor(fullName, 'Name cannot be blank');
    } else {
        setSuccessFor(fullName);
    }

    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (msgValue === ''){
        setErrorFor(msg, 'Message box cannot be blank');
    } else {
        setSuccessFor(msg);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}
