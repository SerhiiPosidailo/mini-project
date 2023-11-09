import React, {FC} from 'react';
import {IMovie} from "../../../interfaces/interfaceMovies";
import css from "./MovieInfo.module.css"


interface IProps {
    movieinfo: IMovie
}

const MovieInfo:FC<IProps> = ({movieinfo}) => {
    const {poster_path,overview,title,vote_average,release_date,genre_ids} = movieinfo;

    return (
        <div className={css.MovieInfo}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            <h1>{title}</h1>
            <p>{overview}</p>
            <div><h1>Rating :</h1>{vote_average}</div>
            <div><h1>Release Data :</h1>{release_date}</div>
            <div>{genre_ids}</div>
        </div>
    );
};

export {MovieInfo};