import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid.test.js', () => {

    const category = 'One Punch';

    test('debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imáegenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://google.com',
                title: 'ABC Title'
            },
            {
                id: 'ABC2',
                url: 'https://google.com',
                title: 'ABC Title'
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });

});