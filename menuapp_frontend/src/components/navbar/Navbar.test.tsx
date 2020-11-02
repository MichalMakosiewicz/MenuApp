import React from 'react';
import {Navbar} from './Navbar';
import renderer from 'react-test-renderer';

describe('Navbar test', () => {
    it('match the snapshot', () => {
        const tree = renderer.create(<Navbar/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})