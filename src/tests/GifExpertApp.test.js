import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';
import '@testing-library/jest-dom';

describe('Pruebas en GifExpertApp.test.js', () => {

    test('debe mostrar correctamente', () => {

        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe mostrar una lista de categorías', () => {

        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });

});