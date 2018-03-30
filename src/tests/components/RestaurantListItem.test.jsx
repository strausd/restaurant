import React from 'react';
import { shallow } from 'enzyme';

import { RestaurantListItem } from '../../components/RestaurantListItem';
import { restaurants } from '../testData/restaurants';


let wrapper, restaurant, selectRestaurant;

beforeAll(() => {
    selectRestaurant = jest.fn();
    restaurant = restaurants[0];
    wrapper = shallow(<RestaurantListItem restaurant={restaurant} index={0} selectRestaurant={selectRestaurant} />);
});

test('should render RestaurantListItem component properly', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().handleRestaurantClick();
    expect(selectRestaurant).toHaveBeenCalled();
});