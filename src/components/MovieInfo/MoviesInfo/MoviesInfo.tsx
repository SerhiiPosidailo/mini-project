import React, {useEffect, useState} from 'react';
import {movieInfoService} from "../../../service/movieInfoService";
import {useParams} from "react-router-dom";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {IMovie} from "../../../interfaces/interfaceMovies";


const MoviesInfo = () => {

    const [movieinfo, setMovieinfo] = useState<IMovie | null>(null)

    const {id} = useParams();

    useEffect(() => {
       movieInfoService.getById(id).then(({data})=>setMovieinfo(data))
    }, [id]);

    return (
        <div>
            {movieinfo && <MovieInfo movieinfo={movieinfo}/>}
        </div>
    );
};

export {MoviesInfo};