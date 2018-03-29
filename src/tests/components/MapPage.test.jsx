import React from 'react';
import { shallow } from 'enzyme';

import { MapPage } from '../../components/MapPage';
import { restaurants } from '../testData/restaurants';


test('should render MapPage component properly', () => {
    const wrapper = shallow(<MapPage restaurants={restaurants} />);
    expect(wrapper).toMatchSnapshot();
});