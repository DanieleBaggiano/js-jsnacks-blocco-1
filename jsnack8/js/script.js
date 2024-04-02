// JSnack 8
// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

const userNum = prompt("numero di 4 cifre");

if (userNum.length !== 4 || isNaN(userNum)) {
    console.log("Non è valido.");
} else {
    let sommaNum = 0;

    for (let num of userNum) {
        sommaNum += parseInt(num);
    }

    console.log("La somma delle cifre è:", sommaNum);
}