function livreGratuit(commande) {
    let total = 0;
    

    // Calcul du total de la commande
    for (const produit in commande) {
        if (commande.hasOwnProperty(produit)) {
            total += commande[produit];
        }
    }

    // dernière étape, vérifier si prix est ok pour livrer gratuitement
    return total > 50;
}

// Définir commande
const commande = {"tomate":5.99, "thon":15.99}

console.log(`statut commande pour livraison gratuite:${livreGratuit(commande)} `)



