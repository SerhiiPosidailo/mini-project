import React, {FC} from 'react';
import {Rating} from "react-simple-star-rating";

import {IMovie} from "../../../interfaces/interfaceMovies";
import css from "./MovieInfo.module.css"


interface IProps {
    movieinfo: IMovie
}

const MovieInfo:FC<IProps> = ({movieinfo}) => {
    const {poster_path,overview,title,vote_average,release_date,} = movieinfo;

    return (
        <div className={css.MovieInfo}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            <h1>{title}</h1>
            <p>{overview}</p>
            <div><h1>Rating :</h1></div>
            <Rating
                iconsCount={10}
                size={40}
                initialValue={vote_average}
                readonly={true}
                allowFraction={true}
                SVGstrokeColor={'black'}
                emptyColor={'#808080FF'}
            />
            <div><h1>Release Data :</h1><b>{release_date}</b></div>
        </div>
    );
};

export {MovieInfo};