let fullname = document.querySelector('#name-input');
let email  = document.querySelector('#email-input');
let phone  = document.querySelector('#phone-input') ;
let message = document.querySelector('#message-input');

const data = () =>{
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
    .then(info => info.json())
    .then(texto => document.querySelector('#fetchtexto').innerHTML = texto)
    .catch((err) => console.log(`Ha habido un problema: ${err}`)); 
}

data();

const simplify = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(info => info.json())
    .then(titulo => document.querySelector('#card1').innerHTML = titulo.title)
    .catch((err) => console.log(`Ha habido un problema: ${err}`)); 
}

simplify();

const dashcoin = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(info => info.json())
    .then(titulo => document.querySelector('#card2').innerHTML = titulo.title)
    .catch((err) => console.log(`Ha habido un problema: ${err}`)); 
}
dashcoin();

const vectorify = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then(info => info.json())
    .then(titulo => document.querySelector('#card3').innerHTML = titulo.title)
    .catch((err) => console.log(`Ha habido un problema: ${err}`)); 
}
vectorify();

const texto1 = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/4')
    .then(info => info.json())
    .then(texto => document.querySelector('#texto1').innerHTML = texto.body)
    .catch((err) => console.log(`Ha habido un problema: ${err}`));
}
texto1();

const texto2 = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/5')
    .then(info => info.json())
    .then(texto => document.querySelector('#texto2').innerHTML = texto.body)
    .catch((err) => console.log(`Ha habido un problema: ${err}`));
}
texto2();

const texto3 = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/6')
    .then(info => info.json())
    .then(texto => document.querySelector('#texto3').innerHTML = texto.body)
    .catch((err) => console.log(`Ha habido un problema: ${err}`));
}
texto3();


const contact = (fullname, email, phone, message) =>{

    fetch('http://127.0.0.1:5501/htmls/indexContact.html', {
        method: "POST", 
        body: JSON.stringify({
            fullname: fullname, 
            email: email, 
            phone: phone,
            message: message,
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error(error);
    });
}

const form = document.querySelector('#submit-btn');
form.addEventListener('submit', event =>{
    event.preventDefault();

    console.log(fullname.value, email.value, phone.value, message.value);
    //contact(fullname.value, email.value, phone.value, message.value);
})


if(fullname.value.trim() === ''){
    throw new Error('Debe completar el campo')
}else if((phone.value).lenght !== 9){
    throw Error('Error de tipeo')
}else if(message.value === ''){
    throw Error('Debe completar el campo')
}else{
    contact = {}
}

contact.fullname = fullname.value;
contact.email = email.value;
contact.phone = phone.value;
contact.message = message.value;
console.log(contact);