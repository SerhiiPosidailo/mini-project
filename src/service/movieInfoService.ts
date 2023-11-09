import {IRes} from "../types/IResType";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IMovie} from "../interfaces/interfaceMovies";

const movieInfoService = {
    getById: (id:string):IRes<IMovie> => axiosService.get(urls.byId(id)),
}


export {
    movieInfoService
}