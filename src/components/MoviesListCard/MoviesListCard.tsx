import css from "./MoviesListCard.module.css"
const MoviesListCard = ({movie}:any) => {
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