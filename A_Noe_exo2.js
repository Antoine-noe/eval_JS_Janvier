let salairebrut = 0.0;
const SOURCE = 0.12;
      MUTUELLE = 0.0225;
      RETRAITE = 0.07;


salairebrut = parseFloat(prompt("Saisir votre salaire BRUT :"));

document.write("Votre salaire BRUT est ", salairebrut, "€. Votre salaire net sera :", (salairebrut-((salairebrut*SOURCE)+(salairebrut*MUTUELLE)+(salairebrut*RETRAITE))),"<br\>");
document.write("La retenue totale sur salaire est de : ", (salairebrut*SOURCE)+(salairebrut*MUTUELLE)+(salairebrut*RETRAITE));
