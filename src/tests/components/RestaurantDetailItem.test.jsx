import React from 'react';
import { shallow } from 'enzyme';

import { RestaurantDetailItem } from '../../components/RestaurantDetailItem';
import { restaurants } from '../testData/restaurants';


let wrapper, restaurant;

beforeAll(() => {
    restaurant = restaurants[0];
    wrapper = shallow(<RestaurantDetailItem restaurant={restaurant} />);
});

test('should render RestaurantDetailItem component properly', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().onMarkerToggle();
    expect(wrapper.state('isOpenMarkerInfo')).toBe(true);
});