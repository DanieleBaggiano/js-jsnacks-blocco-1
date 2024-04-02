// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const word = prompt("inserisci una parola");
const word2 = prompt("inserisci un'altra parola");

if (word < word2) {
    console.log(word + word2);
} else if (word > word2) {
    console.log(word2 + word);
}