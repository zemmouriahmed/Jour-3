function livreGratuit(commande) {
    let total = 0;

    // Calcule du total de la commande
    for (const prix in commande) {
        if (commande.hasOwnProperty(prix)) {
            total += commande[prix];
        }
    }

    // dernière étape, vérifier si prix est ok pour livrer gratuitement
    return total > 50;
}

console.log(`statut commande pour livraison gratuite:${livreGratuit(commande)} `)

// test

commande = (
    { "tomate": 5.99, "thon": 15.99 }
    )
