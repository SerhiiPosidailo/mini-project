import React, {useState} from 'react';
import {moviesService} from "../../../service/moviesService";
import {IMovie} from "../../../interfaces/interfaceMovies";
import {Search} from "./Search";
import css from "./Searchs.module.css"


const Searchs:React.FC = () => {

    const [searchTerm, setSearchTerm] = useState<string>('')
    const [moviesSort, setMoviesSort] = useState<IMovie[]>([])



    const hendleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)

    }

    const handleSearch = async () => {
        await moviesService.getMoviesQuery(searchTerm).then(({data})=> setMoviesSort(data.results))
    }


    return (
        <>
            <div className={css.Searches}>
                {moviesSort.map(movieSort => <Search movieSort={movieSort} key={movieSort.id}/>)}
            </div>
            <div className={css.form}>
                <input type="text" onChange={hendleInput}/>
                <button onClick={handleSearch} >ok</button>
            </div>
        </>

    );
};

export {Searchs};