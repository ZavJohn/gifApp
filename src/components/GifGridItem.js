import React  from 'react';
import PropTypes from 'prop-types';


export const GifGridItem = ( { id, title, url } ) => {
    return (
        <li key={ id } className="card animate__animated animate__flash">
            <img src={ url } alt={ title } />
            <p> { title }</p>
        </li>
    )
}

GifGridItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};