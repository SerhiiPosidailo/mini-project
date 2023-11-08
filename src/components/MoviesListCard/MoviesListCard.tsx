import css from "./MoviesListCard.module.css"
import {IMovie} from "../../interfaces/interfaceMovies";
import {FC} from "react";

interface IProps {
    movie:IMovie
}

const MoviesListCard: FC<IProps> = ({movie}:any) => {
    const {id, title, poster_path, overview, vote_average} = movie;

    return (
        <div className={css.MoviesListCard}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            <div>{vote_average}</div>
            <div>{title}</div>
        </div>
    );
};

export {MoviesListCard};