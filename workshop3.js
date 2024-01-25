function getMoney(person) {
    let totalMoney = 0;

    // Utiliser forEach pour créer une boucle et faire la somme de l'argent
    person.forEach(person => {
        totalMoney += person.budget;
    });

    return totalMoney;
}

//commentaire pour commiter