const form = document.getElementById('formulario')
const container = document.getElementById('movies')
let movieState = []
let i = 0

const printMovieAndYear = (movieState) => {
    const li = document.createElement('li')

    for(i; i < movieState.length; i++){
        li.appendChild(document.createTextNode(`${movieState[i].movie} --- ${movieState[i].year}`))
        container.appendChild(li)
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()
    const movieName = document.querySelector('#name').value
    const movieYear = document.querySelector('#year').value
    const message = document.querySelector('#mensaje')
    
    movieState.push({movie: movieName, year: movieYear})
    movieState.length <= 5 && printMovieAndYear(movieState)
    movieState.length === 5 && message.appendChild(document.createTextNode('Tiene buenos gustos'))
})