import React, {FC} from 'react';
import {IMovie} from "../../../interfaces/interfaceMovies";


interface IProps {
    movieinfo: IMovie
}

const MovieInfo:FC<IProps> = ({movieinfo}) => {
    const {poster_path,overview,title,vote_average,release_date} = movieinfo;

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            <div>{title}</div>
            <div>{overview}</div>
            <div><h1>Rating :</h1>{vote_average}</div>
            <div><h1>Release Data</h1>{release_date}</div>
        </div>
    );
};

export {MovieInfo};