import React from 'react';
import {CardComponent} from './CardComponent';
import renderer from 'react-test-renderer';
import {CardModel} from '../../models/card';

describe('Navbar test', () => {
    const card = new CardModel({
        id: 1,
        title: "test",
        create_date: "test",
        update_date: "test",
        dish: []
    })
    it('match the snapshot', () => {
        const tree = renderer.create(<CardComponent card={card} dishes={[]}/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})