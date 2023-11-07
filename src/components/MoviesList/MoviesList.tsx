import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import css from "./MoviesList.module.css"
import {moviesService} from "../../service/moviesService";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {IMovie} from "../../interfaces/interfaceMovies";


const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});

    const pageQuery = query.get('page') || '500'


    useEffect(() => {
        moviesService.getAll(pageQuery).then(({data})=>{
            setMovies(data.results)
        })
    }, [pageQuery]);


    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            <button>prev</button>
            <button>next</button>
        </div>
    );
};

export {MoviesList};