function Teenager(personnes) {
    let teenager = null;

    for (const nom in personnes ){
        if (personnes.hasOwnProperty(nom) && personnes[nom] >= 13 && personnes[nom] <= 19) {
            teenager = nom;
            break; // On sort de la boucle une fois le teenager a été trouvé
        }
    } 
    return (teenager)

}


//Exemple pour tester la fonction
let personnes = Teenager({
    amine: 71,
    hamid: 45,
    salim: 15,
    karim: 29})


    console.log(personnes)

    