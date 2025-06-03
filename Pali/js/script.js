//  http://127.0.0.1:3000/Pali/index.html

// Chiedere all’utente di inserire una parola 
let userChoice = prompt('Inserisci una parola');
let word = reverseValidator(userChoice);

// Creare una funzione per capire se la parola inserita è palindroma
function reverseValidator(word){
    
    for (let i = word.length - 1; i >= 0; i--){   
        let backwards = '';
        backwards = word[i];
        let reversed = backwards;

        console.log(reversed)
    }

    // se parola da sinistra-destra è indentica a destra-sinsitra allora approvata
    if(reversed == userChoice){
        return 'La parola è palindroma'
    }

    return 'Non è una parola palidroma'
}