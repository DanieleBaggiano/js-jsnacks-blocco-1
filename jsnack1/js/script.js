// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const num = parseInt(prompt("inserisci un numero"));
const num2 = parseInt(prompt("inserisci un altro numero"));

if (num > num2) {
    console.log(num);

} else if (num < num2) {
    console.log(num2);
}