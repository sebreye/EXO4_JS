let phrase = "bonjour tout le monde       "
console.log (phrase)
console.log(phrase.length);
console.log(phrase.trim());
console.log(phrase.trim().length);
console.log(phrase.charAt(20));
console.log(phrase.substring(8));
console.log(phrase.substring())
console.log(phrase.replace("bonjour", "string"))

function modifyString(phrase) {
    var modifiedString = "";
    for (var i = 0; i < phrase.length; i++) {
    if (i == 4 || i == 6) {
        modifiedString += phrase[i].toUpperCase();
    } else {
        modifiedString += phrase[i].toLowerCase();
    }
    }
    return modifiedString;
}
console.log(modifyString(phrase));

function modifyString(nom) {
    var modifiedString = "";
    modifiedString += nom[0].toUpperCase();
    for (var i = 1; i < nom.length - 1; i++) {
    modifiedString += nom[i];
    }
    modifiedString += nom[nom.length - 1].toUpperCase();
    return modifiedString;
}
let nom = "sebastian"
console.log(modifyString(nom));

