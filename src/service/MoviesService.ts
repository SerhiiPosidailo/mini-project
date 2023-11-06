import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const MoviesService = {
    getAll:(page:string) => axiosService.get(urls.movie(page)),
    getGenres: axiosService.get(urls.genres),
    getMoviesByName: (name:string) => axiosService.get(urls.searchMovie(name)),
    getMoviesById: (id:number) => axiosService.get(urls.movieById(id)),
    getMoviesByGenre: (genreKey:string) => axiosService.get(urls.moviesByGenres(genreKey))
}

export {
    MoviesService
}