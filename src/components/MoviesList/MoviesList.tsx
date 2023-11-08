import React, {useEffect, useState} from 'react';
import {Navigate, useSearchParams} from "react-router-dom";

import css from "./MoviesList.module.css"
import {moviesService} from "../../service/moviesService";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {IMovie} from "../../interfaces/interfaceMovies";


const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});

    const pageQuery = query.get('page') || '1'

    useEffect(() => {
        moviesService.getAll(pageQuery).then(({data})=>{
            setMovies(data.results)
        })
    }, [pageQuery]);


    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            <button disabled={+pageQuery === 1} onClick={()=><Navigate to={`/pageQuery/${+pageQuery - 1}`}/>}>prev</button>
            <button disabled={!movies.length} onClick={()=><Navigate to={`/pageQuery${+pageQuery + 1}`}/>}>next</button>
        </div>
    );
};

export {MoviesList};