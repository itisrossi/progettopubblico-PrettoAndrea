//function per il ccalcolo del controllo del codice "calcolaControllo"
function calcolaControllo(risultato){
    
    for (let i = 0; i < risultato.length; i++) {
        var posizioniRisultato = [];
        let puntiRisultato = 0;
        posizioniRisultato[i] = risultato.slice(i, i + 1);
    }
    for (let i = 0; i < array.length; i += 2) {//calcolo caratteri alfanumerici dispari
        if(posizioniRisultato[i] == 0){//calcolo numeri
            puntiRisultato = puntiRisultato + 1;//
        }else{
            if(posizioniRisultato[i] == 1){
                puntiRisultato = puntiRisultato + 0;
            }else{
                if(posizioniRisultato[i] == 2){
                    puntiRisultato = puntiRisultato + 5;
                }else{
                    if(posizioniRisultato[i] == 3){
                        puntiRisultato = puntiRisultato + 7;
                    }else{
                        if(posizioniRisultato[i] == 4){
                            puntiRisultato = puntiRisultato + 9;
                        }else{
                            if(posizioniRisultato[i] == 5){
                                puntiRisultato = puntiRisultato + 13;
                            }else{
                                if(posizioniRisultato[i] == 6){
                                    puntiRisultato = puntiRisultato + 15;
                                }else{
                                    if(posizioniRisultato[i] == 7){
                                        puntiRisultato = puntiRisultato + 17;
                                    }else{
                                        if(posizioniRisultato == 8){
                                            puntiRisultato = puntiRisultato + 19;
                                        }else{
                                            if(posizioniRisultato == 9){
                                                puntiRisultato = puntiRisultato + 21;
                                            }else{
                                                if(posizioniRisultato == "A"){// calcolo lettere
                                                    puntiRisultato = puntiRisultato + 1;
                                                }else{
                                                    if(posizioniRisultato == "B"){
                                                        puntiRisultato = puntiRisultato + 0;
                                                    }else{
                                                        if(posizioniRisultato == "C"){
                                                            puntiRisultato = puntiRisultato + 5;
                                                        }else{
                                                            if(posizioniRisultato == "D"){
                                                                puntiRisultato = puntiRisultato + 7;
                                                            }else{
                                                                if(posizioniRisultato == "E"){
                                                                    puntiRisultato = puntiRisultato + 9;
                                                                }else{
                                                                    if(posizioniRisultato == "F"){
                                                                        puntiRisultato = puntiRisultato + 13;
                                                                    }else{
                                                                        if(posizioniRisultato == "G"){
                                                                            puntiRisultato = puntiRisultato + 15;
                                                                        }else{
                                                                            if(posizioniRisultato == "H"){
                                                                                puntiRisultato = puntiRisultato + 17;
                                                                            }else{
                                                                                if(posizioniRisultato == "I"){
                                                                                    puntiRisultato = puntiRisultato + 19;
                                                                                }else{
                                                                                    if(posizioniRisultato == "J"){
                                                                                        puntiRisultato = puntiRisultato + 21;
                                                                                    }else{
                                                                                        if(posizioniRisultato == "K"){
                                                                                            puntiRisultato = puntiRisultato + 2;
                                                                                        }else{
                                                                                            if(posizioniRisultato == "L"){
                                                                                                puntiRisultato = puntiRisultato + 4;
                                                                                            }else{
                                                                                                if(posizioniRisultato == "M"){
                                                                                                    puntiRisultato = puntiRisultato + 18;
                                                                                                }else;{
                                                                                                    if(posizioniRisultato == "N"){
                                                                                                        puntiRisultato = puntiRisultato + 20;
                                                                                                    }else{
                                                                                                        if(posizioniRisultato == "O"){
                                                                                                            puntiRisultato = puntiRisultato + 11;
                                                                                                        }else{
                                                                                                            if(posizioniRisultato == "P"){
                                                                                                                puntiRisultato = puntiRisultato + 3;
                                                                                                            }else{
                                                                                                                if(posizioniRisultato == "Q"){
                                                                                                                    puntiRisultato = puntiRisultato + 6;
                                                                                                                }else{
                                                                                                                    if(posizioniRisultato == "R"){
                                                                                                                        puntiRisultato = puntiRisultato + 8;
                                                                                                                    }else;{
                                                                                                                        if(posizioniRisultato == "S"){
                                                                                                                            puntiRisultato = puntiRisultato + 12;
                                                                                                                        }else{
                                                                                                                            if(posizioniRisultato == "T"){
                                                                                                                                puntiRisultato = puntiRisultato + 14;
                                                                                                                            }else{
                                                                                                                                if(posizioniRisultato == "U"){
                                                                                                                                    puntiRisultato = puntiRisultato + 16;
                                                                                                                                }else{
                                                                                                                                    if(posizioniRisultato == "V"){
                                                                                                                                        puntiRisultato = puntiRisultato + 10;
                                                                                                                                    }else{
                                                                                                                                        if(posizioniRisultato == "W"){
                                                                                                                                            puntiRisultato = puntiRisultato + 22;
                                                                                                                                        }else{
                                                                                                                                            if(posizioniRisultato == "X"){
                                                                                                                                                puntiRisultato = puntiRisultato + 25;
                                                                                                                                            }else{
                                                                                                                                                if(posizioniRisultato == "Y"){
                                                                                                                                                    puntiRisultato = puntiRisultato + 24;
                                                                                                                                                }else{
                                                                                                                                                    if(posizioniRisultato == "Z"){
                                                                                                                                                        puntiRisultato = puntiRisultato + 23;
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    
    }
    for (let i = 1; i < array.lenght; i += 2){//calcolo cartteri alfanumerici pari
        if(posizioniRisultato[i] == 0){//calcolo numeri
            puntiRisultato = puntiRisultato + 0;//
        }else{
            if(posizioniRisultato[i] == 1){
                puntiRisultato = puntiRisultato + 1;
            }else{
                if(posizioniRisultato[i] == 2){
                    puntiRisultato = puntiRisultato + 2;
                }else{
                    if(posizioniRisultato[i] == 3){
                        puntiRisultato = puntiRisultato + 3;
                    }else{
                        if(posizioniRisultato[i] == 4){
                            puntiRisultato = puntiRisultato + 4;
                        }else{
                            if(posizioniRisultato[i] == 5){
                                puntiRisultato = puntiRisultato + 5;
                            }else{
                                if(posizioniRisultato[i] == 6){
                                    puntiRisultato = puntiRisultato + 6;
                                }else{
                                    if(posizioniRisultato[i] == 7){
                                        puntiRisultato = puntiRisultato + 7;
                                    }else{
                                        if(posizioniRisultato == 8){
                                            puntiRisultato = puntiRisultato + 8;
                                        }else{
                                            if(posizioniRisultato == 9){
                                                puntiRisultato = puntiRisultato + 9;
                                            }else{
                                                if(posizioniRisultato == "A"){// calcolo lettere
                                                    puntiRisultato = puntiRisultato + 0;
                                                }else{
                                                    if(posizioniRisultato == "B"){
                                                        puntiRisultato = puntiRisultato + 1;
                                                    }else{
                                                        if(posizioniRisultato == "C"){
                                                            puntiRisultato = puntiRisultato + 2;
                                                        }else{
                                                            if(posizioniRisultato == "D"){
                                                                puntiRisultato = puntiRisultato + 3;
                                                            }else{
                                                                if(posizioniRisultato == "E"){
                                                                    puntiRisultato = puntiRisultato + 4;
                                                                }else{
                                                                    if(posizioniRisultato == "F"){
                                                                        puntiRisultato = puntiRisultato + 5;
                                                                    }else{
                                                                        if(posizioniRisultato == "G"){
                                                                            puntiRisultato = puntiRisultato + 6;
                                                                        }else{
                                                                            if(posizioniRisultato == "H"){
                                                                                puntiRisultato = puntiRisultato + 7;
                                                                            }else{
                                                                                if(posizioniRisultato == "I"){
                                                                                    puntiRisultato = puntiRisultato + 8;
                                                                                }else{
                                                                                    if(posizioniRisultato == "J"){
                                                                                        puntiRisultato = puntiRisultato + 9;
                                                                                    }else{
                                                                                        if(posizioniRisultato == "K"){
                                                                                            puntiRisultato = puntiRisultato + 10;
                                                                                        }else{
                                                                                            if(posizioniRisultato == "L"){
                                                                                                puntiRisultato = puntiRisultato +11;
                                                                                            }else{
                                                                                                if(posizioniRisultato == "M"){
                                                                                                    puntiRisultato = puntiRisultato + 12;
                                                                                                }else;{
                                                                                                    if(posizioniRisultato == "N"){
                                                                                                        puntiRisultato = puntiRisultato + 13;
                                                                                                    }else{
                                                                                                        if(posizioniRisultato == "O"){
                                                                                                            puntiRisultato = puntiRisultato + 14;
                                                                                                        }else{
                                                                                                            if(posizioniRisultato == "P"){
                                                                                                                puntiRisultato = puntiRisultato + 15;
                                                                                                            }else{
                                                                                                                if(posizioniRisultato == "Q"){
                                                                                                                    puntiRisultato = puntiRisultato + 16;
                                                                                                                }else{
                                                                                                                    if(posizioniRisultato == "R"){
                                                                                                                        puntiRisultato = puntiRisultato + 17;
                                                                                                                    }else;{
                                                                                                                        if(posizioniRisultato == "S"){
                                                                                                                            puntiRisultato = puntiRisultato + 18;
                                                                                                                        }else{
                                                                                                                            if(posizioniRisultato == "T"){
                                                                                                                                puntiRisultato = puntiRisultato + 19;
                                                                                                                            }else{
                                                                                                                                if(posizioniRisultato == "U"){
                                                                                                                                    puntiRisultato = puntiRisultato + 20;
                                                                                                                                }else{
                                                                                                                                    if(posizioniRisultato == "V"){
                                                                                                                                        puntiRisultato = puntiRisultato + 21;
                                                                                                                                    }else{
                                                                                                                                        if(posizioniRisultato == "W"){
                                                                                                                                            puntiRisultato = puntiRisultato + 22;
                                                                                                                                        }else{
                                                                                                                                            if(posizioniRisultato == "X"){
                                                                                                                                                puntiRisultato = puntiRisultato + 23;
                                                                                                                                            }else{
                                                                                                                                                if(posizioniRisultato == "Y"){
                                                                                                                                                    puntiRisultato = puntiRisultato + 24;
                                                                                                                                                }else{
                                                                                                                                                    if(posizioniRisultato == "Z"){
                                                                                                                                                        puntiRisultato = puntiRisultato + 25;
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    puntiRisultato = puntiRisultato / 26;
    if(puntiRisultato == 0){
        let calcolaControllo = "A";
    }else{
        if(puntiRisultato == 1){
            let calcolaControllo = "B";
        }else{
            if(puntiRisultato == 2){
                let calcolaControllo = "C";
            }else{
                if(puntiRisultato == 3){
                    let calcolaControllo = "D";
                }else{
                    if(puntiRisultato == 4){
                        let calcolaControllo = "E";
                    }else{
                        if(puntiRisultato == 5){
                            let calcolaControllo = "F";
                        }else{
                            if(puntiRisultato == 6){
                                let calcolaControllo = "G";
                            }else{
                                if(puntiRisultato == 7){
                                    let calcolaControllo = "H";
                                }else{
                                    if(puntiRisultato == 8){
                                        let calcolaControllo = "I";
                                    }else{
                                        if(puntiRisultato == 9){
                                            let calcolaControllo = "J";
                                        }else{
                                            if(puntiRisultato == 10){
                                                let calcolaControllo = "K";
                                            }else{
                                                if(puntiRisultato == 11){
                                                    let calcolaControllo = "L";
                                                }else{
                                                    if(puntiRisultato == 12){
                                                        let calcolaControllo = "M";
                                                    }else{
                                                        if(puntiRisultato == 13){
                                                            let calcolaControllo = "N";
                                                        }else{
                                                            if(puntiRisultato == 14){
                                                                let calcolaControllo = "O";
                                                            }else{
                                                                if(puntiRisultato == 15){
                                                                    let calcolaControllo = "P";
                                                                }else{
                                                                    if(puntiRisultato == 16){
                                                                        let calcolaControllo = "Q";
                                                                    }else{
                                                                        if(puntiRisultato == 17){
                                                                            let calcolaControllo = "R";
                                                                        }else{
                                                                            if(puntiRisultato == 18){
                                                                                let calcolaControllo = "S";
                                                                            }else{
                                                                                if(puntiRisultato == 19){
                                                                                    let calcolaControllo = "T";
                                                                                }else{
                                                                                    if(puntiRisultato == 20){
                                                                                        let calcolaControllo = "U";
                                                                                    }else{
                                                                                        if(puntiRisultato == 21){
                                                                                            let calcolaControllo = "V";
                                                                                        }else{
                                                                                            if(puntiRisultato == 22){
                                                                                                let calcolaControllo = "W";
                                                                                            }else{
                                                                                                if(puntiRisultato == 23){
                                                                                                    let calcolaControllo = "X";
                                                                                                }else{
                                                                                                    if(puntiRisultato == 24){
                                                                                                        let calcolaControllo = "Y";
                                                                                                    }else{
                                                                                                        if(puntiRisultato == 25){
                                                                                                            let calcolaControllo = "Z";
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return calcolaControllo;
}
    