import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Rating} from 'react-simple-star-rating'

import {IMovie} from "../../../interfaces/interfaceMovies";
import css from "./GenresIdMovie.module.css"

interface IProps {
    movieIdGenre:IMovie
}

const GenresIdMovie:FC<IProps> = ({movieIdGenre}) => {

    const {original_title, poster_path,vote_average} = movieIdGenre;
    const navigate = useNavigate();

    return (
        <div className={css.GenresIdMovie} onClick={()=>navigate(`/movies/${movieIdGenre.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title}/>
            <div className={css.rating}>
                <Rating
                    iconsCount={10}
                    size={15}
                    initialValue={vote_average}
                    readonly={true}
                    allowFraction={true}
                    emptyColor={'#808080FF'}
                />
            </div>
            <h3>{original_title}</h3>
        </div>
    );
};

export {GenresIdMovie};