import React from 'react';
import { shallow } from 'enzyme';

import { RestaurantsList } from '../../components/RestaurantsList';
import { restaurants } from '../testData/restaurants';


test('should render RestaurantsList component properly with no restaurants', () => {
    const wrapper = shallow(<RestaurantsList restaurants={[]} />);
    expect(wrapper).toMatchSnapshot();
    const items = wrapper.find('Connect(RestaurantListItem)');
    expect(items.length).toBe(0);
});

test('should render RestaurantsList component properly with restaurants', () => {
    const wrapper = shallow(<RestaurantsList restaurants={restaurants} />);
    expect(wrapper).toMatchSnapshot();
    const items = wrapper.find('Connect(RestaurantListItem)');
    expect(items.length).toBe(restaurants.length);
});