/* "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz"

tous les chiffres entiers au multiple de 3 = fizz
tous les chiffres entiers au multiple de 5 = buzz
tous les chiffres entiers au multiple de 3 & 5 = fizzbuzz

nombres entiers de 1 à 100 
    SI on divise le nombre par 3 et que ça donne un entier 
    return fizz

    SI on divise le nombre par 5 et que ça donne un entier 
    return buzz

    SI on divise le nombre par 3 et 5 et que ça donne un entier 
    return fizzbuzz */

let nombre = 1;

function deUnACent(nombre) {
    var string = ""
    for (var i = 1; i <= nombre; i++) {
        if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
            string += 'FizzBuzz'
        } else
        if (Number.isInteger(i / 3)) {
            string += ' Fizz'
        } else
        if (Number.isInteger(i / 5)) {
            string += ' Buzz'
        } else {
            string += i
        }
        string += " "
    }
    return string
}

// Exercices élèves 

var classe = [{
    nom: 'Marc',
    moyenne: 15
}, {
    nom: 'Marion',
    moyenne: 8
}, {
    nom: 'Antoine',
    moyenne: 4
}, {
    nom: 'Jean',
    moyenne: 14
}]

function afficheQuiALaMoyenne(eleves) {
    for (var i = 0; i < eleves.length; i++) {
        var eleve = eleves[i]
        if (eleve.moyenne >= 10) {
            console.log (eleve.nom + ' a la moyenne')
        }
    }
}