const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    movie: (page:string):string => `/discover/movie?page=${page}`,
    genres: '/genre/movie/list',
    searchMovie:(name:string):string => `/search/keyword?query=${name}`,
    movieById: (id:number):string => `/movie/${id}`,
    moviesByGenres: (genre_key:string):string => `/discover/movie?with_genres=${genre_key}`
}

export {
    baseURL,
    urls
}
