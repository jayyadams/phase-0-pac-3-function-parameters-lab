function introduction(name) {
    return `Hi, my name is ${name}.`;
}
console.log(introduction("Jordan"))

function  introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguage("Jordan", "JavaScript"))

const langauge = "JavaScript"
const name = "Jordan"
function introductionWithLanguageOptional(name = "Jordan", langauge = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name = "Jordan", language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
