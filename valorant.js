let attaquant = [];
let defenseur = [];
console.log("cc")
defenseur.push(
  { name: "Omen", caracteristique: "smoker" },
  { name: "Phoenix", caracteristique: "flasher" },
  { name: "Jett", caracteristique: "killer" },
  { name: "Fade", caracteristique: "" },
  { name: "Jett ", caracteristique: "" }
);

attaquant.push(
  { name: "Omen", caracteristique: "smoker" },
  { name: "Phoenix", caracteristique: "flasher" },
  { name: "Jett", caracteristique: "killer" },
  { name: "Fade", caracteristique: "" },
  { name: "Jett ", caracteristique: "" }
);

let Vattaquant = 0;
let Vdefenseur = 0;

while (Vattaquant < 13 && Vdefenseur < 13) {
  let joueur_attaquant = [Math.floor(Math.random() * attaquant.length)];
  let alea = attaquant[joueur_attaquant];
  let joueur_defenseur = [Math.floor(Math.random() * defenseur.length)];
  let alea2 = defenseur[joueur_defenseur];

  let probattaquantdie = Math.random();
  let probdefenseurdie = Math.random();

  function duel(alea, alea2) {
    if (probattaquantdie > probdefenseurdie) {
      console.log( alea2.name + "degage ");
      alea2.splice(joueur_defenseur, 1);
      let probaduspike = 0.6;
      if (probaduspike > Math.random()) {
        let probattaquant = 0.7;
        let probadefenseur = 0.3;
        while (attaquant.length != 0 || defenseur.length != 0) {
          let joueuratt = [Math.floor(Math.random() * attaquant.length)];
          let att = attaquant[joueuratt];
          let joueurdef = [Math.floor(Math.random() * defenseur.length)];
          let def = defenseur[joueurdef];
          console.log("Les joueurs choisis sont" + att.name + " et "+ def.name);
          if (probattaquant > Math.random()) {
            console.log(att.name + " a tué le "+ def.name);
            defenseur.splice(joueurdef, 1);
          } else {
            console.log(def.name + " a tué" + att.name);
            attaquant.splice(joueuratt, 1);
          }
          if (defenseur.length === 0) {
            console.log("Les attaquants remportent une manche!");
            Vattaquant++; 
          } else {
            console.log("Les défenseurs remportent une manche!");
            Vdefenseur++; 
          }
        }
      } else {
        let probattaquant = 0.5;
        let probadefenseur = 0.5;
        while (attaquant.length != 0 || defenseur.length != 0) {
          let joueuratt = [Math.floor(Math.random() * attaquant.length)];
          let att = attaquant[joueuratt];
          let joueurdef = [Math.floor(Math.random() * defenseur.length)];
          let def = defenseur[joueurdef];
          console.log("Les joueurs choisis sont" + att.name + " et "+ def.name);
          if (probattaquant > Math.random()) {
            console.log(att.name + " a tué le "+ def.name);
            defenseur.splice(joueurdef, 1);
          } else {
            console.log(def.name + " a tué" + att.name);
            attaquant.splice(joueuratt, 1);
          }
          if (defenseur.length === 0) {
            console.log("Les attaquants remportent une manche!");
            Vattaquant++; 
          } else {
            console.log("Les défenseurs remportent une manche!");
            Vdefenseur++; 
          }
        }
       
      }
    } else {
      console.log(alea.name + "a perdu  le combat");

      alea.splice(joueur_attaquant, 1);
      let probaduspike = 0.4;
      if (probaduspike > Math.random()) {
        let probattaquant = 0.7;
        let probadefenseur = 0.3;
        while (attaquant.length != 0 || defenseur.length != 0) {
          let joueuratt = [Math.floor(Math.random() * attaquant.length)];
          let att = attaquant[joueuratt];
          let joueurdef = [Math.floor(Math.random() * defenseur.length)];
          let def = defenseur[joueurdef];
          console.log("Les joueurs choisis sont" + att.name + " et "+ def.name);
          if (probattaquant > Math.random()) {
            console.log(att.name + " a tué  "+ def.name);
            defenseur.splice(joueurdef, 1);
          } else {
            console.log(def.name + " a tué" + att.name);
            attaquant.splice(joueuratt, 1);
          }
          if (defenseur.length === 0) {
            console.log("Les attaquants remportent une manche!");
            Vattaquant++; 
          } else {
            console.log("Les défenseurs remportent une manche!");
            Vdefenseur++; 
          }
        }
        
      }
      if (probaduspike > Math.random()) {
        let probattaquant = 0.5;
        let probadefenseur = 0.5;
        while (attaquant.length != 0 || defenseur.length != 0) {
          let joueuratt = [Math.floor(Math.random() * attaquant.length)];
          let att = attaquant[joueuratt];
          let joueurdef = [Math.floor(Math.random() * defenseur.length)];
          let def = defenseur[joueurdef];
          console.log("Les joueurs choisis sont" + att.name + " et "+ def.name);
          if (probattaquant > Math.random()) {
            console.log(att.name + " a tué  "+ def.name);
            defenseur.splice(joueurdef, 1);
          } else {
            console.log(def.name + " a tué" + att.name);
            attaquant.splice(joueuratt, 1);
          }
          if (defenseur.length === 0) {
            console.log("Les attaquants remportent une manche!");
            Vattaquant++; 
          } else {
            console.log("Les défenseurs remportent une manche!");
            Vdefenseur++; 
          }
        }
      }
    }
  }
}
