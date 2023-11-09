import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {IMovie} from "../../../interfaces/interfaceMovies";
import {moviesService} from "../../../service/moviesService";
import {GenresIdMovie} from "../GengesIdMovie/GenresIdMovie";
import css from "./GenresIdMovies.module.css"


const GenresIdMovies = () => {

    const {id} = useParams();

    const [movieIdGenres, setMovieIdGenres] = useState<IMovie[]>([])

    const [query, setQuery] = useSearchParams({page: '1'});

    const [totalPages, setTotalPages] = useState(1);
    const pageQuery = query.get('page')
    const allPages:number = 500

    useEffect(() => {
        moviesService.getMovieById(id, pageQuery).then(({data})=>{
            setMovieIdGenres(data.results)
            setTotalPages(data.total_pages)
        })
    }, [id,totalPages,pageQuery]);

    const pagePrev = ():void => {
        setQuery(prev => {
            prev.set('page', `${+pageQuery - 1}`)
            return prev
        })
    }

    const pageNext = ():void => {
        setQuery(prev => {
            prev.set('page', `${+pageQuery + 1}`)
            return prev
        })
    }

    return (
        <>
            <div className={css.GenresIdMovie}>
                {movieIdGenres.map(movieIdGenre => <GenresIdMovie key={movieIdGenre.id} movieIdGenre={movieIdGenre}/>)}
            </div>
            <div className={css.Button}>
                <button disabled={+pageQuery === 1} onClick={(pagePrev)}>&lt;prev</button>
                <span><b> {pageQuery} page of 500</b></span>
                <button disabled={pageQuery === `${allPages}`} onClick={(pageNext)}>next&gt;</button>
            </div>
        </>
    );
};

export {GenresIdMovies};