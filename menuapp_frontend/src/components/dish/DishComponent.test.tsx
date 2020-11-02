import React from 'react';
import {DishComponent} from './DishComponent';
import renderer from 'react-test-renderer';
import {DishModel} from '../../models/dish';

describe('Navbar test', () => {
    const dish = new DishModel({
        id: 1,
        name: "test",
        description: "test",
        price: 12,
        preparation_time: 13,
        add_date: "test",
        update_date: "test",
        photo: "test",
        is_vegan: true
    })
    it('match the snapshot', () => {
        const tree = renderer.create(<DishComponent dish={dish}/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})