var taille = 0;
var poids = 0;
var sexe = 0;
var imc = 0.0;

taille = parseInt(prompt("Saisissez votre taille en Cm "));
poids = parseInt(prompt("Saisissez votre poid en Kg"));
imc = poids/(taille/100*taille/100);
do{
sexe = parseInt(prompt("Si vous êtes un homme tapez 1, si vous êtes une femme tapez 2"));
}while((sexe !== 1) && (sexe !== 2));

switch (sexe) {
    case 1 : document.write("Vous êtes un homme"+ "<br/>");
             document.write("Vous mesurez :", taille, "Cm"+ "<br/>");
             document.write("Vous pesez :", poids, "Kg"+ "<br/>");
             document.write("Votre poids idéal serait :"+ (((50+2.3*(taille/2.54-60)) + (taille-100-((taille-150)/4)))/2) , "Kg"+ "<br/>");
             document.write("Votre Indice de Masse Corporelle est de :", imc + "<br/>");
             break;
    case 2 : document.write("Vous êtes ue femme"+ "<br/>");
             document.write("Vous mesurez :", taille, "Cm"+ "<br/>");
             document.write("Vous pesez :", poids, "Kg"+ "<br/>");
             document.write("Votre poids idéal serait :"+ (((45.5+2.3*(taille/2.54-60)) + (taille-100-((taille-150)/2.5)))/2) , "Kg"+ "<br/>");
             document.write("Votre Indice de Masse Corporelle est de :", imc + "<br/>");
             break;
}

if(imc < 16.5){
    document.write("Vous êtes en catégorie Maigreur sévére.");
}
if((16.5 <= imc) && (imc < 18.99)){
    document.write("Vous êtes en catégorie Maigreur.");
}
if((18.99 <= imc) && (imc < 24.99)){
    document.write("Vous êtes en catégorie Normale.");
}
if((24.99 <= imc) && (imc < 29.99)){
    document.write("Vous êtes en catégorie Surcharge.");
}
if((29.99 <= imc) && (imc < 34.99)){
    document.write("Vous êtes en catégorie Obésité Modérée.");
}
if((34.99 <= imc) && (imc< 39.99)){
    document.write("Vous êtes en catégorie Obésité Sévére.");
}
if(imc >= 39.99){
    document.write("Vous êtes en catégorie Obésité Morbide.");
}