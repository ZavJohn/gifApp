import React  from 'react';

export const GifGridItem = ( { id, title, url } ) => {
    return (
        <li key={ id } className="card animate__animated animate__flash">
            <img src={ url } alt={ title } />
            <p> { title }</p>
        </li>
    )
}