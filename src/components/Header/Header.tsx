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
                <NavLink to={'search'}>Search</NavLink>
            </div>

            <div className={css.Img}>
                <div>
                    <input type="checkbox" />
                </div>
                <img src="https://ru.legacy.reactjs.org/logo-og.png" alt="React"/>
                <p>user</p>
            </div>
        </div>
    );
};

export {Header};