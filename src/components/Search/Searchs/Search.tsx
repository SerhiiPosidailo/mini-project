import React, {FC} from 'react';
import {IMovie} from "../../../interfaces/interfaceMovies";
import {Rating} from "react-simple-star-rating";
import css from './Search.module.css'
import {useNavigate} from "react-router-dom";

interface IProps {
    movieSort:IMovie
}

const Search:FC<IProps> = ({movieSort}) => {

    const {original_title,poster_path, vote_average} = movieSort;
    const navigate = useNavigate();
    return (
        <div className={css.Search} onClick={()=>navigate(`/movies/${movieSort.id}`)}>
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