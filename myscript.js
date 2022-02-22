// Visualizzare in pagina 5 numeri casuali

function getRandomIntInclusive (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}


//definisco le costanti
const numeri = document.getElementById("numeri");
const testo = document.getElementById("testo");
const numeriRandom= [];
let numero;
let i = 0;

//genero 5 numeri random da 1 a 100
do {
    numero = getRandomIntInclusive(1,100);

    if (numeriRandom.includes(numero) == false) {
        numeriRandom.push(numero);
        numeri.innerHTML += (` \u00A0 ${numeriRandom[i]} \u00A0 `);
        i++
    }
    
} while (numeriRandom.length < 5);

console.log(numeriRandom);




// Dopo la chiusura dell’alert parte un timer di 30 secondi.
// Alla fine dei 30 secondi l’utente dovrà inserire, uno alla volta, i numeri che ha visto precedentemente
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri sono stati individuati.