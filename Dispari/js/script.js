//  http://127.0.0.1:3000/Dispari/index.html


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
let userOddOrEven = prompt('Pari o dispari? (Ricorda la maiuscola!)');
let userChoiceType = '';

if (userOddOrEven == 'Pari' || userOddOrEven == 'Dispari'){
   
    userChoiceType = userOddOrEven;
    console.log("L'utente ha scelto: " + userChoiceType + '!');

} else {
   
    userChoiceType = null;
    console.log('Riprova');

}

let userNumber = Number(prompt('Inserisci un numero da 1 a 5'));
let userChoiceNumber = '';

if (userNumber < 1 || userNumber > 5){
 
    userChoiceNumber = null;
    console.log('Non fare il fenomeno e leggi la richiesta');

} else {

    userChoiceNumber = userNumber;
    console.log("L'utente ha scelto il numero: " + userNumber + '!');

}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
function computerGame(){

    let computerMath = Math.floor(Math.random() * 4 + 1);
    console.log('Il computer ha scelto: ' + computerMath)

    if (userOddOrEven == 'Pari' || userOddOrEven == 'Dispari' && userNumber >= 1 || userNumber < 6){

        return computerMath
    
    } else {

        return null

    }

}

let computerChoice = computerGame();

// Sommiamo i due numeri.
let sum = userChoiceNumber + computerChoice; 
console.log('La somma è: ' + sum);
    
    
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function oddOrEvenDecision(){
    
    if (sum % 2 == 0 && userChoiceType == 'Pari'){
    
        return true
    
    } else if (sum % 2 !== 0 && userChoiceType == 'Dispari'){
    
        return true
    
    } else {

        return false

    }
}

let verdict = oddOrEvenDecision();


// Dichiariamo chi ha vinto.
if (verdict = true){
   
    console.log('Hai vinto la scommessa')

} else if (verdict = false){

    console.log('Hai perso! Riprova premdendo F5')

} else if (userChoiceType == null || userChoiceNumber == null || computerChoice == null) {

    console.log('Hai sbagliato qualcosa, riprova')
    
}