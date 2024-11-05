



/**
 * verifica se una parola è palindroma
 *
 * @param {string} userWord
 * @returns {boolean}
 */

function isPalindroma(userWord) {
    let reverseWord = ""
    for (let i = userWord.length - 1; i >= 0; i--) {
        reverseWord += userWord[i]
    }
    return userWord === reverseWord;
}
