import React from 'react';

const MoviesListCard = ({movie}:any) => {
    return (
        <div>
            <div>{movie.title}</div>
        </div>
    );
};

export {MoviesListCard};