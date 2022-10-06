const data = () =>{
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
    .then(info => info.json())
    .then(texto => document.querySelector('#fetchtexto').innerHTML = texto)
    .catch((err) => console.log(err)); 
}

data();


const simplify = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(info => info.json())
    .then(titulo => document.querySelector('#card1').innerHTML = titulo.title)
    .catch((err) => console.log(err)); 
}

simplify();

const dashcoin = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(info => info.json())
    .then(titulo => document.querySelector('#card2').innerHTML = titulo.title)
    .catch((err) => console.log(err)); 
}
dashcoin();

const vectorify = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then(info => info.json())
    .then(titulo => document.querySelector('#card3').innerHTML = titulo.title)
    .catch((err) => console.log(err)); 
}
vectorify();

