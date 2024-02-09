/**

Sfruttiamo le timing functions 
per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare
 fino alle 9:30 di lunedì mattina!

*/


/*

Conto all arovesce fino alle 9 di domani
 (da cambiare poi con il giorno esatto)
 - prendo l'ora di adesso
 - faccio (24+9)-ora =>totale ore da contare
 - ad ogni ora aggiorno il counter


*/

//bottone stop
const buttonStop = document.getElementById("button")
buttonStop.addEventListener("click", function(){
    clearTimeout(myHour)
    clearTimeout(myMinutes)
    clearTimeout(mySeconds)


})

//costanti tempo attuale
const currentDate = new Date();
let currentHour = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentSeconds = currentDate.getSeconds();

console.log(currentSeconds)

//costanti per le ore
const hour = document.getElementById("ora");
let hCounter =+ 0

//costanti per i minuti
const minutes = document.getElementById("minuti");
let minCounter =+ 0

//costanti per i secondi
const seconds = document.getElementById("secondi");
let secCounter =+ 0


//ogni 1000ms scatta la funzione che mi diminuisce il counter
const myHour = setInterval(counterHour, 1000); //impostare ore corrette
let remainingHours = (24+9) - (currentHour);

//ogni 1000ms scatta la funzione che mi diminuisce il counter
const myMinutes = setInterval(counterMinutes, 1000); //impostare minuti corrette
let remainingMinutes = 60 - (currentMinutes);

//ogni 1000ms scatta la funzione che mi diminuisce il counter
const mySeconds = setInterval(counterSeconds, 1000); 
let remainingSeconds = 60 - (currentSeconds);




/* -------------------------------- funzioni -------------------------------- */

function counterHour() {
    hCounter++
    hour.innerText = `ore mancanti: ${remainingHours - hCounter}`

    if (hCounter >= remainingHours){
        clearTimeout(myHour)

    }
    
}

function counterMinutes() {
    minCounter++
    minutes.innerText = `minuti mancanti: ${remainingMinutes - minCounter}`


    if (minCounter >= remainingMinutes){

        minCounter = 0;        

    }

    if(minCounter > 100){

    }
    
}

function counterSeconds() {
    secCounter++
    seconds.innerText = `Secondi mancanti: ${remainingSeconds - secCounter}`


    if (secCounter >= remainingSeconds){

        secCounter = 0;        

    }

    if(secCounter > 100){

    }
    
}





