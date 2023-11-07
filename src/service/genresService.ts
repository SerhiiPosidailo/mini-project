import {IRes} from "../types/IResType";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IGenre, IGenres} from "../interfaces/interfaceGanre";

const genresService ={
    getAll:():IRes<IGenres<IGenre>> => axiosService.get(urls.genre)
}


export {
    genresService
}