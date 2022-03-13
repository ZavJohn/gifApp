
import getGifs from '../../helpers/getGifs'

describe('Pruebas con fetch gifs', ()=> {
    test('debe traer 10 elementos', async() => {
        const gifs = await getGifs('Naruto');

        expect( gifs.length ).toBe( 10 );
    });

    test('no debe traer elementos', async() => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    });

})