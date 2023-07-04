/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, 
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
COME BONUS:
BONUS 1
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta, così come fatto in classe questa mattina.
BONUS 2
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

*/


for (let i = 1; i <= 100; i++) {
    // condizione Fizz Buzz
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}