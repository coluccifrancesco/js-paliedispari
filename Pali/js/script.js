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


//  CORREZIONE IN CLASSE (e comunque non funziona)

/*
    function isPalindrom(word){

        // split in array of character
        const splitWordArray = word.split('')
  
        // revert the order of array's characters
        const reverseWordArray = splitWordArray.reverse()

        // join all array's elements 
        const joinWordArray = reverseWordArray.join()

        // lowercase the characters
        const lowerWordArray = joinWordArray.tolowercase

        if(word == lowerWordArray){
            return true
        }

        return false

    }

    const word = 'ada';
    

    isPalindrom(word)
*/




//  CORREZIONE IN CLASSE 2

/*
    const word = ada;


    function splitWord(splittedWord){
    
        for (let 1 = 0; i < word.length; i++){

            const thisCharacter = word[i];

            splittedWord.push(thisCharacter).toLowerCase;

        }

        return splittedWord

    }

    function arrReverse(arr){
    
        fot (let i = splitWordArr.length - 1; i >= 0; i--){
        
            const element = arr[i];

            revArr.push(element);
        
        }

        return revArr

    }

    const splitWordArr = [];

    const revArr = arrReverse(splitWordArr);
    console.log(revArr);

    console.log(joinedString)

    function joinString(arr){
    
        let joinedString  = '';
        
        for (let i = 0; i < splitWordArr.length; i++){
        
            const element = revArr[i];

            joinedString += element;

        }
    
        return joinedString
    }

    const joinedString = joinString(revArr);
    console.log(joinedString())

    function isPalindrom(word){
    
        const splitArrString = splitWord(word);

        const reversedArray = arrReverse(splitArrString);

        const revWord = joinString(reversedArr);

        if (word === revWord){
        
            return true

        }

        return false
    }
*/