// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
let userOddEven = prompt('Inserisci pari o dispari');
if (userOddEven != 'pari' && userOddEven != 'dispari'){
    alert('Premi F5');
}

let userNumber = Number(prompt('Inserisci un numero da 1 a 5'));
if (userNumber < 1 || userNumber > 5){
    alert('Premi F5');
}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
function computerNumber(){
    let computerChoice = Math.floor(Math.random() * 4 + 1);
    return computerChoice;
}

let computerRandom = computerNumber();
console.log('Il computer ha scelto: ' + computerRandom);

// Sommiamo i due numeri 
let sum = userNumber + computerRandom;
console.log('La somma è: ' + sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
function isEven (){
    let result = '';

    if(sum % 2 === 0 && userOddEven === 'pari'){
        result = 'Hai vinto';
    } else if(sum % 2 !== 0 && userOddEven === 'dispari'){
        result = 'Hai vinto';
    } else {
        result = 'Hai perso';
    }

    liveVerdict(result);
}

// Dichiariamo chi ha vinto.

// let verdict = isEven();
// console.log(verdict);

function liveVerdict(result){

    if(result === 'Hai vinto'){
        console.log('Hai vinto tu campione!')
    } else {
        console.log('Hai perso!');
    }
}

isEven();