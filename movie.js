
async function main (){
    const movie = await fetch("https://www.omdbapi.com/?apikey=a020a8a2&s=rise")
    const moviedata = await movie.json()
    const moviedata2 = document.querySelector(".movie__wrap")
    moviedata2.innerHTML = moviedata.Search.map(data => movieHTML(data)).join("")


}
main()

function movieHTML(data){
    return  `<div class="movie">
              <div class="movie__img--wrapper">
                <img src="${data.Poster}" alt="" />
              </div>
              <div class="movie__description">
                <div class="movie__title">${data.Title}</div>
                <div class="movie__year">${data.Year}</div>
                <div class="movie__ID">${data.imdbID}</div>
              </div>
            </div>`
}
