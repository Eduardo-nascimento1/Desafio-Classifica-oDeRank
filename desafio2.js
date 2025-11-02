
let scoreRank = rankedMatches(5, 10)
let nivel;
console.log(scoreRank);

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
    case (scoreRank > 10 && scoreRank <= 20):
        nivel = "bronze"
        break

}

function rankedMatches(win, loser,) {
    let mmr = win - loser
    return mmr;
}