import React, {useEffect, useState} from 'react';

import {IGenre} from "../../../interfaces/interfaceGanre";
import {genresService} from "../../../service/genresService";
import {Genre} from "../Genre/Genre";
import css from "./Genres.module.css"


const Genres = () => {

    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(() => {
        genresService.getAll().then(({data})=> setGenres(data.genres))
    }, []);

    return (
        <div className={css.Genres}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};