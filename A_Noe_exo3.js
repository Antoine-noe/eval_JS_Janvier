var saisie = 0;
    saisie2 = 0;

    saisie = parseInt(prompt("Saisir un premier entier :"));
    saisie2 = parseInt(prompt("Saisir un second entier :"));


    if(saisie > saisie2){
        document.write(saisie ," est plus grand que ", saisie2);
    }
    else{
        if (saisie === saisie2){
            document.write(saisie, " et ", saisie2, " sont égaux.");}
        else{
        document.write(saisie, " est plus petit que ", saisie2);
        }
    }
