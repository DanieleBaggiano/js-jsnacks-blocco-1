// JSnack 9
// Calcola la somma e la media dei primi 10 numeri.

let somma = 0;
let media = 0;

for (let i = 0; i <= 10; i++) {
    somma = somma + i;
    media = somma / i;
    console.log(`somma`, somma);
    console.log(`media`, media);
}