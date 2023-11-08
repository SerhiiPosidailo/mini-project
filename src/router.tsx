import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {GenresPage} from "./pages/GenrePage/GenresPage";
import {MovieInfoPage} from "./pages/MovieInfoPage/MovieInfoPage";
import {SearchPage} from "./pages/SearchPage/SearchPage";
import React from "react";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'movies'}/>},
            {path:'movies', element:<MoviesPage/>, children:[
                    {path:'search', element:<SearchPage/>}
                ]},
            {path:'/movies/:id', element:<MovieInfoPage/>},
            {path:'genres', element:<GenresPage/>},


        ]}
]);


export {
    router
}