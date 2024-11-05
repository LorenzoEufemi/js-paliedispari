// DATI
const userWord = prompt("Inserire una parola:");

// ESECUZIONE
if (isPalindroma(userWord) ) {
    console.log(`La parola ${userWord} è palindroma.`)
} else {
    console.log(`La parola ${userWord} non è palindroma`)
}