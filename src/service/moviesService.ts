import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IMovies} from "../interfaces/interfaceMovies";
import {IRes} from "../types/IResType";

const moviesService = {
    getAll:(page:string):IRes<IMovies> => axiosService.get(urls.movies, {params:{page}}),
    getMovieById:(id:string, page:string):IRes<IMovies> => axiosService.get(urls.genreIdMovies(id), {params:{page}}),

    getMoviesQuery:(key:string):IRes<IMovies> => axiosService.get(urls.search(key))

}

export {
    moviesService

}