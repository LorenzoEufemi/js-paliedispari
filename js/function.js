



/**
 * verifica se una parola è palindroma
 *
 * @param {string} userWord
 * @returns {boolean}
 */
function isPalindroma(userWord) {
    let wordReverse = userWord.toLowerCase().split("").reverse().join("");
    return userword.toLowerCase() === wordReverse;
}