/**

Sfruttiamo le timing functions 
per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare
 fino alle 9:30 di lunedì mattina!

*/








const timer = setInterval(showTime, 1000);

function showTime(){
    const expiringTime = new Date("2024-02-12T09:30:00");
    
    let tot = Date.parse(expiringTime) - Date.parse(new Date());
    let sec = Math.floor( (tot/1000) % 60 );
    let min = Math.floor( (tot/1000/60) % 60 ); 
    let hour = Math.floor( (tot/(1000*60*60)) % 24 );
    let days = Math.floor( tot/(1000*60*60*24) );
    
    document.getElementById("giorni").innerText = sec;

    document.getElementById("giorni").innerText = days;
    document.getElementById("ore").innerText = hour;
    document.getElementById("minuti").innerText = min;
    document.getElementById("secondi").innerText = sec;

    if (sec==0&&min==0&& hour==0 && days==0){
        clearInterval(timer);
        

    }
}






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
