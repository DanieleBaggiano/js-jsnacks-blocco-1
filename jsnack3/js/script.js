// JSnack 3
// Il software deve chiedere per 10 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;

for (let i = 0; i < 10; i++) {
    const userNum = parseInt(prompt("Scrivi un numero"));
    somma += userNum;

    console.log("somma", somma);
}
