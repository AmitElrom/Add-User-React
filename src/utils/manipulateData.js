// Uppercase first letter of word
const FirstLetterCase = (str) => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()

// Uppercase first letter of every word, trim, arrange spaces
const titleCase = (str) => {
    return str.trim().split(/[\s,\t,\n]+/).map(s => FirstLetterCase(s)).join(' ')
}

export { FirstLetterCase, titleCase }