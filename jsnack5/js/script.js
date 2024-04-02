// JSnack 5
// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

const vuoto = [];

for (let i = 0; i < 6; i++) {
    const userNum = parseInt(prompt("Inserisci un numero"));

    if (userNum % 2 !== 0) {
        vuoto.push(userNum);
    }
}

console.log("Numeri dispari inseriti:", vuoto);

