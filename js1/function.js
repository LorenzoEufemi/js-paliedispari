

/**
 * generare un numero random da min a max
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomNum (min,max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min )
    return randomNum
}






/**
 * stabilisce se un numero è pari o dispari
 *
 * @param {number} numberToCheck
 * @returns {string}
 */
function evenOdd (numberToCheck) {
    let result = ""
    if (numberToCheck % 2 === 0) {
        result= "pari"
    } else {
        result= "dispari"
    }
    return result 
}