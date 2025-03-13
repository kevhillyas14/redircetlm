
// Désactiver le menu contextuel
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Gérer le loader et afficher le formulaire
document.addEventListener("DOMContentLoaded", function () {
    // Simuler un délai avant d'afficher le formulaire
    setTimeout(function () {
        // Masquer le loader
        document.getElementById("loader").style.display = 'none';
        
        // Afficher le formulaire avec une animation de fondu
        const formContainer = document.getElementById("form-container");
        formContainer.style.opacity = 1; // Faire apparaître progressivement
        formContainer.style.display = 'flex'; // Afficher le formulaire
        
        // Activer le scroll après chargement
        document.body.style.overflow = 'auto';
    }, 900); // Le loader s'affiche pendant 0.9 secondes
});