
let scoreRank = rankedMatches(105, 2)
let nivel;

switch (true) {
    case (scoreRank <= 10):
        nivel = "ferro"
        break
    case (scoreRank > 10 && scoreRank <= 20):
        nivel = "bronze"
        break
    case (scoreRank > 21 && scoreRank <= 50):
        nivel = "prata"
        break
    case (scoreRank > 51 && scoreRank <= 80):
        nivel = "Ouro"
        break
    case (scoreRank > 81 && scoreRank <= 90):
        nivel = "Diamante"
        break
    case (scoreRank > 91 && scoreRank <= 100):
        nivel = "Lendario"
        break
    case (scoreRank >= 101):
        nivel = "Imortal"
        break
}

console.log("o saldo de vitorias do heroi e ", + scoreRank, "esta no nivel de " + nivel);

function rankedMatches(win, loser, mmr = 0) {
    mmr = win - loser
    return mmr;
}