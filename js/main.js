'use strict'

// Data di fine del conto alla rovescia
const finalDate = new Date("jul 14, 2023 09:30:00");

// Aggiorna il conto alla rovescia ogni secondo
const updateCountdown = setInterval(function () {
    // Ottieni la data e l'ora corrente
    const now = new Date();

    // Calcola la differenza tra la data di fine e la data corrente
    let timeDiff = finalDate - now;

    // Calcola ore, minuti e secondi rimanenti
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Visualizza il conto alla rovescia nel formato "ore:minuti:secondi"
    document.getElementById("countdown").textContent = hours + " : " + minutes + " : " + seconds;
}, 1000); // 1000 millisecondi corrispondono a 1 secondo

