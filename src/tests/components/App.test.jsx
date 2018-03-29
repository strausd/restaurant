import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../../components/App';

let wrapper, fetchRestaurants;

beforeAll(() => {
    fetchRestaurants = jest.fn();
    wrapper = shallow(<App fetchRestaurants={fetchRestaurants} />);
});

test('should render App component properly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(fetchRestaurants).toHaveBeenCalledTimes(1);
});