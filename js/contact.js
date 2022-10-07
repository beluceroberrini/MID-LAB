let fullname = document.querySelector('#name-input');
let email = document.querySelector('#email-input');
let phone = document.querySelector('#phone-input');
let message = document.querySelector('#message-input');

console.log(fullname);

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();

    if (fullname.value.trim() === '') {
        throw new Error('Debe completar el campo')
    } else if (phone.value.lenght !== 9) {
        throw Error('Error de tipeo')
    } else if (message.value === '') {
        throw Error('Debe completar el campo')
    } else {
        const contact = {
            fullname: fullname.value,
            email: email.value,
            phone: phone.value,
            message: message.value
        }
        //    contact.fullname = fullname.value;
        //    contact.email = email.value;
        //    contact.phone = phone.value;
        //    contact.message = message.value;
        console.log(contact);
    }
    //contact(fullname.value, email.value, phone.value, message.value);
})


