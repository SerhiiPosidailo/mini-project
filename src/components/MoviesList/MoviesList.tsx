import React, {useEffect, useState} from 'react';
import {MoviesService} from "../../service/MoviesService";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


const MoviesList = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        MoviesService.getAll('1').then(({data})=> setMovies(data.results))
    }, []);

    return (
        <div>
            {/*{movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}*/}
        </div>
    );
};

export {MoviesList};