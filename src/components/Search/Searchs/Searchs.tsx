import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import css from "./Searchs.module.css"
import {moviesService} from "../../../service/moviesService";
import {IMovie} from "../../../interfaces/interfaceMovies";
import {SearchForm} from "../SearchForm/SearchForm";
import {Search} from "./Search";


const Searchs = () => {
    const [movies, setMovies]  = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1)
    const [params, setParams] = useSearchParams({page: '1', query: ''});

    const pageQuery: string  = params.get('page') || '1';
    const query: string = params.get('query') || '';
    const allPages:number = 500

    const searchMovies = (queryParam:string, pageParam: string) => {
        moviesService.getMoviesQuery(queryParam, pageParam)
            .then(({ data }) => {
                setMovies(data.results);
                setTotalPages(data.page);
            });
    };

    useEffect(() => {
        if (query) {
            searchMovies(query, pageQuery);
        } else {
            moviesService.getMoviesQuery(query, pageQuery).then(({data}) => {
                setMovies(data.results);
                setTotalPages(data.page);
            })
        }
    }, [query,pageQuery, totalPages]);


    const handlePagePrev = () => {
        setParams(prev => {
            prev.set('page', `${+pageQuery - 1}`)
            return prev
        })
    }

    const handlePageNext = () => {
        setParams(prev => {
            prev.set('page', `${+pageQuery + 1}`)
            return prev
        })
    }
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        if (form && form.elements) {
            const query: string = (form.elements.namedItem('search') as HTMLInputElement)?.value || '';
            setParams(prev => {
                prev.set('query', query);
                prev.set('page', '1');
                return prev;
            });
        }
    }

    return (
        <div>
            <div>
                <SearchForm onSubmit={handleSearchSubmit}/>
            </div>
            <div className={css.allMovie}>
                {movies.map(movie => <Search key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.Button}>
                <button className={css.btn} onClick={handlePagePrev} disabled={pageQuery === '1'}> prev&lt; </button>
                <span> Page:{pageQuery}</span>
                <button className={css.btn} onClick={handlePageNext} disabled={pageQuery === `${allPages}`}> next&gt; </button>
            </div>
        </div>
    );
};

export {Searchs};