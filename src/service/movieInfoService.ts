import {IRes} from "../types/IResType";
import {IMovies} from "../interfaces/interfaceMovies";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const movieInfoService = {
    getById:(id:string):IRes<IMovies> => axiosService.get(urls.byId(id))
}


export {
    movieInfoService
}