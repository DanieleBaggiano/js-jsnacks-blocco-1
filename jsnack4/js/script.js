// JSnack 4
// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o
// no alla festa.

const invitatiFesta = ["Pippo", "Pluto", "Paperino"];

const userName = prompt("Come ti chiami?");
console.log(userName);

for (let i = 0; i < invitatiFesta.length; i++) {
    const invitati = invitatiFesta [i];

    if (userName == invitati) {
        console.log("Puoi partecipare!");
    } else {
        console.log("Non puoi partecipare!");
    }
}