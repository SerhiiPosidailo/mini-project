import React from 'react';

const MoviesListCard = ({movie}:any) => {
    return (
        <div>
            <div>{movie.original_title}</div>
        </div>
    );
};

export {MoviesListCard};