const palindromes = function (str) {
    /**
     * transform str to Uppercase
     * get only letters from string
     * create a new reverse copy of the string
     * compare the two copies
     */

    const strLetters = [...str.toUpperCase()].filter(letter => {
        const code = letter.charCodeAt();
        return (code >= 65 && code <= 90)
                || (code >= 48 && code <= 57);
    });
    return strLetters.join("") == strLetters.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
