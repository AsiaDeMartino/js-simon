// Visualizzare in pagina 5 numeri casuali

function getRandomIntInclusive (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}


//definisco le costanti
const numeri = document.getElementById("numeri");
const testo = document.getElementById("testo");
const bottone = document.getElementById("bottone");
const numeriRandom= [];
let numero;
let i = 0;
let time = 30;
let clock = 0;
const numeriUtente = [];
let numeriIndovinati = 0;

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

//creo funzioni per far partire e fermare il timer
function start () {
    bottone.removeEventListener("click", start);

    clock = setInterval(() => {
        time--;

        if (time === 0) {
            numeri.innerHTML = "Tempo scaduto!";

            

        } else if (time == -1){
            
            clearInterval( clock );

           for (let i = 0; i < 5; i++) { 
               
            numero = parseInt( prompt("Inserisci uno dei numeri che ricordi") );
                
            if (numeriUtente.includes(numero) === false){
                numeriUtente.push(numero);
            }
               
           }

            numeri.innerHTML = "";

            for (let i = 0; i < numeriRandom.length; i++) {
                
                if (numeriRandom.includes(numeriUtente[i])) {
                    numeriIndovinati++
                    numeri.innerHTML += ` \u00A0 ${numeriUtente[i]} \u00A0 `
    
                } 
            }
            
            testo.innerHTML = `I numeri che hai indovinato sono ${numeriIndovinati}<br>e sono `;                           // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri sono stati individuati.


        } else if (time > 0) {
            numeri.innerHTML = time;
            testo.innerHTML = "";
            bottone.style.display = "none";

        }

    }, 1000);

}


bottone.addEventListener("click" , start );

console.log(numeriUtente);


