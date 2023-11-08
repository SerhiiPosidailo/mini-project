import React, {FC} from 'react';
import {IGenre} from "../../../interfaces/interfaceGanre";
import css from "./Genre.module.css"
import {NavLink} from "react-router-dom";

interface IProps {
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    const {name} = genre;
    return (
        <div className={css.Genre}>
            <div>
                <NavLink to={''}>{name}</NavLink>
            </div>
        </div>
    );
};

export {Genre};