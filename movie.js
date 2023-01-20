

async function main (){
    let movie = await fetch("https://www.omdbapi.com/?apikey=a020a8a2&s=rise")
    let moviedata = await movie.json()
    console.log(moviedata)
}

main()