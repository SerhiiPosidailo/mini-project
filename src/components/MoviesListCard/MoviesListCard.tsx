import React, {FC} from "react";
import {Rating} from 'react-simple-star-rating'
import {useNavigate} from "react-router-dom";

import css from "./MoviesListCard.module.css"
import {IMovie} from "../../interfaces/interfaceMovies";


interface IProps {
    movie:IMovie
}

const MoviesListCard: FC<IProps> = ({movie}:any) => {

    const {title, poster_path, vote_average} = movie;
    const navigate = useNavigate();


    return (
        <div className={css.MoviesListCard} onClick={()=>navigate(`${movie.id}`, {state:movie})}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
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

            <h3>{title}</h3>
        </div>
    );
};

export {MoviesListCard};