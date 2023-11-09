import React, {FC} from 'react';
import {IGenre} from "../../../interfaces/interfaceGanre";
import css from "./Genre.module.css"
import {useNavigate} from "react-router-dom";

interface IProps {
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {

    const {name} = genre;
    const navigate = useNavigate();

    return (
        <div className={css.Genre} onClick={()=>navigate(`${genre.id}`)}>
                <div>{name}</div>
        </div>
    );
};

export {Genre};