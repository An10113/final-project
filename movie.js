

async function main (){
    let movie = await fetch("https://www.omdbapi.com/?apikey=a020a8a2&s=rise")
    let moviedata = await movie.json()
    
}

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

main()