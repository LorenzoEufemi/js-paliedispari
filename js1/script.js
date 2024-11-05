// DATI
const chooseOne = prompt("Scegliere tra pari e dispari:");
const userNum = prompt("Scegliere un numero da 1 a 5:");

let min = 1;
let max = 5;

const userNumber = parseInt(userNum);

const computerNum = getRandomNum(min, max);
console.log(computerNum);

// ESECUZIONE

const sum = userNumber + computerNum;
console.log(sum);

const comparison = evenOdd(sum);
console.log(comparison);

let final = ``;
if (comparison === chooseOne) {
    final = `Risposta esatta il numero è ${comparison}!`
} else {
    final = `Risposta sbagliata riprovare!`
};

// OUTPUT
console.log(final);