class equipe {
    constructor(name, fonction){
        this.name = name
        this.fonction = fonction
    }
}

// const omen = "Omen";
// const phoenix = "Phoenix";
// const jett = "Jett";
// const fade = "Fade";
// const chamber = "Chamber";

let perso = ["Omen", "Phoenix", "Jett", "Fade", "Chamber"];

const attaquants = new equipe([omen, phoenix, jett, fade, chamber], "Attaquants");
const défenseurs = new equipe([omen, phoenix, jett, fade, chamber], "Défenseurs");

let Vattaquant = 0;
let Vdefenseneur = 0;

// Tant Vattaquant < 13 et Vdefenseur < 13:
//     Sélectionner aléatoirement un joueur de chaque équipe
//     Duel(joueur_attaquant, joueur_défenseur)

while( Vattaquant < 13 && Vdefenseur < 13){
    Math.random()*perso.length.attaquants && ath.random()*perso.length.défenseurs
     duel(Vattaquant, Vdefenseur)
}