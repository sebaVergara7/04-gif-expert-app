import React from 'react';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en GifGridItem.test.js', () => {
    
    const title = 'Un título';
    const url = 'https://localhost/algo.png';

    let wrapper = shallow( <GifGridItem title={ title } url={ url } /> );
    
    test('debe mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe tener un párrafo con el title', () => {

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );

    });

    test('debe tener una imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        // console.log( img.html() );
        // console.log( img.props() );

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('debe tener animate__fadeIn', () => {

        const div = wrapper.find('div');

        // expect( div.prop('className') ).toContain( 'animate__fadeIn' );
        expect( div.prop('className').includes('animate__fadeIn') ).toBe( true );


    });

});