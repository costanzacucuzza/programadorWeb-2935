function includesText(text, baseText) {
    if (typeof text === 'string' && typeof baseText === 'string') {
        var textUpperCase = text.toUpperCase()
        var baseTextUpperCase = baseText.toUpperCase()
        if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}


console.log(includesText('Pa', 'Patricia'))
console.log(includesText('pa', 'Patricia'))
console.log(includesText('Patricia', 'Pa'))
console.log(includesText(2, 'Pa'))