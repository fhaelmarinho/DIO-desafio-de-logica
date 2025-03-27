function rankingGame(win, loss){
    let total = win - loss;
    let ranking;

    if (total <= 10){
        ranking = "Iron";
    }
    else if (total >= 11 && total <=20){
        ranking = "Bronze";
    }
    else if (total >= 21 && total <=50){
        ranking = "Silver";
    }
    else if (total >= 51 && total <= 80){
        ranking = "Gold";
    }
    else if (total >= 81 && total <= 90){
        ranking = "Diamond";
    }
    else if (total >= 91 && total <= 100){
        ranking = "Legendary";
    }
    else{
        ranking = "Immortal";
    }

    console.log(`O Herói tem de saldo de ${total} está no nível ${ranking}`);
}

// Simulação de dados
rankingGame(100, 25);