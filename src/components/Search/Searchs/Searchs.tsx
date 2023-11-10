import React from 'react';
import {useForm} from "react-hook-form";
import {axiosService} from "../../../service/axiosService";
import {urls} from "../../../constants/urls";
import {useSearchParams} from "react-router-dom";

const Searchs = () => {
    
    const {handleSubmit,reset} = useForm();
    const [query, setQuery] = useSearchParams({qury: '1'});

    const click = async () => {
           const {data} = await axiosService.get(urls.search)
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(click)}>
            <input type="text" name="text" id="text"/>
            <button>go</button>
        </form>
    );
};

export {Searchs};