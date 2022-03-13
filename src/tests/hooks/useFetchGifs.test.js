
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook <useFetchGifs/>', () => {
    test('debe de retornar el estado inicial', async() => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Saint Seiya'));
        const { data:images, loading } = result.current;

        await waitForNextUpdate();

        expect( images ).toEqual([]);
        expect( loading ).toBe(true);
    });

    test('Retornar arreglo de imagenes y loading false', async() => { 
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Saint Seiya'));
        await waitForNextUpdate();
        
        const { data:images, loading } = result.current;

        expect( images.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });

});