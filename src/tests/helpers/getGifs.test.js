import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs.test.js', () => {

    test('debe de traer 10 elementos', async () => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );

    });

    test('debe de traer 10 elementos', async () => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    });

});