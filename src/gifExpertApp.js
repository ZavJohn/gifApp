import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () =>{

//const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    
    const [categories, setCategories ] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
    const handleAdd = () => {
        setCategories( [...categories, 'YugiOH'] );
    };

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory />
            <hr />

            <button onClick={ handleAdd }>Agregar</button>
            <ul>
                { 
                    categories.map(category => {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ul>
        </>
        
    );
}

/*GifExpertApp.propTypes = {
    saludo: PropTypes.string.isRequired
};*/

/*GifExpertApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
};*/