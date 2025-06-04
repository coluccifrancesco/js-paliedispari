//  http://127.0.0.1:3000/Dispari/index.html


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
let userOddOrEven = prompt('Pari o dispari? (Ricorda la maiuscola!)').toLowerCase();
console.log(userOddOrEven);

// let userChoiceType = '';

// if (userOddOrEven == 'pari' || userOddOrEven == 'dispari'){
   
//     userChoiceType = userOddOrEven;
//     console.log("L'utente ha scelto: " + userChoiceType + '!');

// } else {
   
//     userChoiceType = null;
//     console.log('Riprova');

// }

let userNumber = Number(prompt('Inserisci un numero da 1 a 5'));
console.log(userNumber);
// let userChoiceNumber = '';

// if (userNumber < 1 || userNumber > 5){
 
//     userChoiceNumber = null;
//     console.log('Non fare il fenomeno e leggi la richiesta');

// } else {

//     userChoiceNumber = userNumber;
//     console.log("L'utente ha scelto il numero: " + userNumber + '!');

// }

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
function generateRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let computerChoice = generateRandomNumber(1,5);
console.log(computerChoice);

// Sommiamo i due numeri.
let sum = userNumber + computerChoice; 
console.log('La somma è: ' + sum);
    
    
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven(numb){
    
    if (numb % 2 == 0){
    
        return 'pari'
    
    }

    return 'dispari'
}

let verdict = isEven(sum);
console.log(verdict);

// Dichiariamo chi ha vinto.
if (verdict === userOddOrEven){
    console.log('You Win')
} else {
    console.log('You lost')
}

// if (verdict = true){
   
//     console.log('Hai vinto la scommessa')

// } else if (verdict = false){

//     console.log('Hai perso! Riprova premdendo F5')

// } else if (userChoiceType == null || userChoiceNumber == null || computerChoice == null) {

//     console.log('Hai sbagliato qualcosa, riprova')
    
// }