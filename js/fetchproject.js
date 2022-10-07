
const data = () =>{
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
    .then(info => info.json())
    .then(texto => document.querySelector('#fetchtexto').innerHTML = texto)
    .catch((err) => console.log(`Ha habido un problema: ${err}`)); 
}

data();
