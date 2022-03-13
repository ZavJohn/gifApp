import React  from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    test('Debe mostrar el componente correctamente', () => { 
        const id = '';
        const title = 'Esto es una prueba';
        const url = 'https://hechosparalavida.mx';
        const wrapper = shallow( <GifGridItem id={ id } title={ title } url={ url }/>);
        
        expect( wrapper ).toMatchSnapshot();
    });
});

