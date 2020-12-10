import getClueFromPromise from "./promise-version.js"
window.addEventListener('DOMContentLoaded', () => {
    // button click add event listener
    document.getElementById('use-promise').addEventListener('click', () => {
        getClueFromPromise().then(res => {
            console.log(res);
            document.getElementById('question').innerHTML = res.question;
            document.getElementById('answer').innerHTML = res.answer;
            document.getElementById('value').innerHTML = res.value;
            document.getElementById('category-title').innerHTML = res.category.title;
            document.getElementById('invalid-count').innerHTML = res.invalidCount > 0 ? 'invalid' : 'valid';
    })
})
})

// ta questions:
// game.js line 10 is res.category.title bad practice
