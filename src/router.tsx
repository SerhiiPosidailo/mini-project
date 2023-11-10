import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {GenresPage} from "./pages/GenrePage/GenresPage";
import {MovieInfoPage} from "./pages/MovieInfoPage/MovieInfoPage";

import React from "react";
import {GenresIdPage} from "./pages/GenresIdPage/GenresIdPage";
import {SearchPage} from "./pages/SearchPage/SearchPage";


const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'movies'}/>},
            {path:'movies', element:<MoviesPage/>},
            {path:'/movies/:id', element:<MovieInfoPage/>},
            {path:'genres', element:<GenresPage/>},
            {path: '/genres/:id', element: <GenresIdPage/>},
            {path:'/search', element:<SearchPage/>},
        ]}
]);


export {
    router
}