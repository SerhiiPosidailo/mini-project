import React, {FC} from 'react';
import {Rating} from "react-simple-star-rating";
import {useNavigate} from "react-router-dom";

import css from './Search.module.css'
import {IMovie} from "../../../interfaces/interfaceMovies";

interface IProps{
    movie: IMovie
}

const Search:FC<IProps> = ({movie}) => {

    const {poster_path, original_title, vote_average} = movie;
    const navigate = useNavigate();


    return (
        <div className={css.Search} onClick={()=>navigate(`/movies/${movie.id}`)}>
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

export {Search};