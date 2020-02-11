export function loadLocalHighscores() {

    const scores = localStorage.getItem('highscores');
    if (!scores) return [];
    return JSON.parse(scores).sort((a, b) => b.correct - a.correct);
}

export function saveLocalHighscore(score) {

    const scores = loadLocalHighscores();
    scores.push(score);
    localStorage.setItem('highscores', JSON.stringify(scores))

}