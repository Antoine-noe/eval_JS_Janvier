var saisie = 0;
var index = 0;

saisie=parseInt(prompt("Saisir un nombre entier :"));
saisie = saisie +2;


// si valeur impaire
if(saisie%2 === 1)
{
 for (index = 1; index <= saisie+2; index++)
 {
     saisie -= 2;
     document.write(saisie+ " ");
 }
}

// si valeur paire
 else{
    for (index = 1; index <= saisie; index++){
        saisie -= 2;
        document.write(saisie-1+ " ");
    }
 }