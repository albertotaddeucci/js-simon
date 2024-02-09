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
const expiringTime = new Date("2024-02-10T09:30:00");

let tot = Date.parse(expiringTime) - Date.parse(new Date());
let sec = Math.floor( (t/1000) % 60 );
let min = Math.floor( (t/1000/60) % 60 ); 
let hour = Math.floor( (t/(1000*60*60)) % 24 );
let days = Math.floor( t/(1000*60*60*24) );

// let currentHour = currentDate.getHours();
// let currentMinutes = currentDate.getMinutes();
// let currentSeconds = currentDate.getSeconds();

document.getElementById("ora").innerText = days

// timeRemaining(expiringTime);


console.log(currentSeconds)

//costanti per le ore
// const hour = document.getElementById("ora");
let hCounter =+ 0

//costanti per i minuti
const minutes = document.getElementById("minuti");
let minCounter =+ 0

//costanti per i secondi
const seconds = document.getElementById("secondi");
let secCounter =+ 0


//ogni 1000ms scatta la funzione che mi diminuisce il counter
let remainingHours = (24+9) - (currentHour);
const myHour = setInterval(counterHour, 1000); //impostare ore corrette

//ogni 1000ms scatta la funzione che mi diminuisce il counter
let remainingMinutes = 60 - (currentMinutes);
const myMinutes = setInterval(counterMinutes, 60 * 1000); //impostare minuti corrette

//ogni 1000ms scatta la funzione che mi diminuisce il counter
let remainingSeconds = 60 - (currentSeconds);
const mySeconds = setInterval(counterSeconds, 1000); 






/* -------------------------------- funzioni -------------------------------- */
let hourEnd
let minEnd
function counterHour() {
    hCounter++
    let differenceHours = remainingHours - hCounter
    hour.innerText = `ore mancanti: ${differenceHours}`

    if (hCounter >= remainingHours){
        clearTimeout(myHour)
        hourEnd = true

    }
    
}

function counterMinutes() {
    minCounter++
    let differenceMin = remainingMinutes - minCounter
    minutes.innerText = `minuti mancanti: ${differenceMin}`


    if (differenceMin===0){

        minCounter = 0;   
        minEnd = true     
        // clearTimeout(myMinutes)


    }

    
}

function counterSeconds() {
    secCounter++
    let differenceSec = remainingSeconds - secCounter
    seconds.innerText = `Secondi mancanti: ${differenceSec}`


    if (secCounter >= remainingSeconds){

        secCounter = 0;    
        let secEnd = true    

    }
    
}





// function timeRemaining(date){
	

// 	return {
// 		'tot': t,
// 		'days': days,
// 		'hours': hour,
// 		'minutes': min,
// 		'seconds': sec 
// 	}; 
// }
