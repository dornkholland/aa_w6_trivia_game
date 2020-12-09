function getClue() {
    return fetch('https://jservice.xyz/api/random-clue')
        .then(res => res.ok ? res.json() : new Error(res.status)) // if (res.ok) { return res.json() } else { return new Error(res.status) }
}
