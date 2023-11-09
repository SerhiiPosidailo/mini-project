import React, {FC} from 'react';
import {IMovie} from "../../../interfaces/interfaceMovies";
import css from "./GenresIdMovie.module.css"
import {useNavigate} from "react-router-dom";

interface IProps {
    movieIdGenre:IMovie
}

const GenresIdMovie:FC<IProps> = ({movieIdGenre}) => {

    const {original_title, poster_path,vote_average} = movieIdGenre;
    const navigate = useNavigate();

    return (
        <div className={css.GenresIdMovie} onClick={()=>navigate(`/movies/${movieIdGenre.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title}/>
            <div>{vote_average}</div>
            <h3>{original_title}</h3>
        </div>
    );
};

export {GenresIdMovie};