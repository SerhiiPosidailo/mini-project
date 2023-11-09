import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import css from "./MoviesList.module.css"
import {moviesService} from "../../service/moviesService";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {IMovie} from "../../interfaces/interfaceMovies";


const MoviesList = () => {

    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [totalPages, setTotalPages] = useState(1);
    const pageQuery = query.get('page') || '1'
    const allPages:number = 500


    useEffect(() => {
        moviesService.getAll(pageQuery).then(({data})=>{
            setMovies(data.results)
            setTotalPages(data.total_pages)
        })
    }, [totalPages,pageQuery]);

    const handlePagePrev = ():void => {
        setQuery(prev => {
            prev.set('page', `${+pageQuery - 1}`)
            return prev
        })
    }

    const handlePageNext = ():void => {
        setQuery(prev => {
            prev.set('page', `${+pageQuery + 1}`)
            return prev
        })
    }


    return (
        <>
            <div className={css.MoviesList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.Button}>
                <button disabled={+pageQuery === 1} onClick={(handlePagePrev)}>&lt;prev</button>
                <span><b> {pageQuery} page of 500</b></span>
                <button disabled={pageQuery === `${allPages}`} onClick={(handlePageNext)}>next&gt;</button>
            </div>
        </>
    );
};

export {MoviesList};