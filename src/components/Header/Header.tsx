import React from 'react';
import css from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <div>The MovieDB</div>
            <div className={css.Navigate}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'movies/search'}>Search</NavLink>
            </div>
            <div>asdasd</div>
        </div>
    );
};

export {Header};