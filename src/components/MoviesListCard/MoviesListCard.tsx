import css from "./MoviesListCard.module.css"
import {IMovie} from "../../interfaces/interfaceMovies";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

interface IProps {
    movie:IMovie
}

const MoviesListCard: FC<IProps> = ({movie}:any) => {

    const {title, poster_path, vote_average} = movie;
    const navigate = useNavigate();


    return (
        <div className={css.MoviesListCard} onClick={()=>navigate(`${movie.id}`, {state:movie})}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            <div>{vote_average}</div>
            <h3>{title}</h3>
        </div>
    );
};

export {MoviesListCard};