import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants/urls";
import {IMovies} from "../interfaces/interface";

const MoviesService = {
    getAll:(page:string) => axiosService.get(urls.movie(page)),
    getGenres:():IRes<IMovies[]>=> axiosService.get(urls.genres),
    getMoviesByName: (name:string) => axiosService.get(urls.searchMovie(name)),
    getMoviesById: (id:number):IRes<IMovies> => axiosService.get(urls.movieById(id)),
    getMoviesByGenre: (genreKey:string) => axiosService.get(urls.moviesByGenres(genreKey))
}

export {
    MoviesService

}