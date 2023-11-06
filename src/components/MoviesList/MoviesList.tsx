import React, {useEffect, useState} from 'react';
import {MoviesService} from "../../service/MoviesService";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {IMovies} from "../../interfaces/interface";


const MoviesList = () => {
    const [movies, setMovies] = useState<IMovies[]>([])


    useEffect(() => {
        MoviesService.getAll('1').then(({data})=> setMovies(data.results))
    }, []);

    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};