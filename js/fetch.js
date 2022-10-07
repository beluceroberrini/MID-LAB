
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
    .then(texto => {
            console.log(texto);
        document.querySelector('#texto1').innerHTML = texto.body
    })
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

