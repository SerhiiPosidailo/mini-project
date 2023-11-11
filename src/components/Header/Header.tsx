import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"


const Header:React.FC = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (

        <div className={css.Header}>
            <div>The MovieDB</div>
            <div className={css.Navigate}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
            </div>
            <div className={css.User}>
                <div className={`dark-mode-switch ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
                    <input type="checkbox" checked={isDarkMode} onChange={toggleMode}/>
                </div>
                <div className={css.Img}>
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="React"/>
                <p>user</p>
                </div>
            </div>
        </div>
    );
};

export {Header};