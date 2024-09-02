
let URL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist&type=single'

async function getJoke() {
    let data = await fetch(URL)
    let response = await data.json()
    document.querySelector('.joke').textContent = response.joke;
    document.querySelector('.categorie').textContent = response.category;


}

getJoke()