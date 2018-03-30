import React from 'react';
import { shallow } from 'enzyme';

import { WelcomeMessage } from '../../components/WelcomeMessage';


test('should render WelcomeMessage component properly', () => {
    const wrapper = shallow(<WelcomeMessage />);
    expect(wrapper).toMatchSnapshot();
});