var saisie = 0;
var index = 0;

saisie=parseInt(prompt("Saisir un nombre entier :"));

// si valeur impaire
if(saisie%2 === 0)
{
 saisie = saisie - 1;
}

// si valeur paire
for (index = saisie; index > 0; index-=2){
        document.write(index+ " ");
}
