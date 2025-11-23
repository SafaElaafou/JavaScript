let nombreADeviner = Math.floor(Math.random() * 10) + 1;
let tentatives = 0;
let trouve = false;

while (!trouve) {
    
    let proposition = Number(prompt("Devinez un nombre entre 1 et 10 :"));
    tentatives++;

    if (proposition === nombreADeviner) {
        alert(`Bravo ! Vous avez trouvé le nombre ${nombreADeviner} en ${tentatives} tentatives.`);
        trouve = true;
    } else if (proposition < nombreADeviner) {
        alert("Le nombre à deviner est plus grand.");
    } else if (proposition > nombreADeviner) {
        alert("Le nombre à deviner est plus petit.");
    } else {
        alert("Entrée invalide, veuillez entrer un nombre entre 1 et 10.");
    }
}