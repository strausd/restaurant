import React from 'react';
import { shallow } from 'enzyme';

import { DetailPage } from '../../components/DetailPage';
import { restaurants } from '../testData/restaurants'


test('should render DetailPage component properly', () => {
    const wrapper = shallow(<DetailPage match={{params: { id: 1 }}} restaurants={restaurants} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render DetailPage component properly with no id', () => {
    const wrapper = shallow(<DetailPage match={{params: {}}} restaurants={restaurants} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render DetailPage component properly with invalid id', () => {
    const wrapper = shallow(<DetailPage match={{params: { id: 'map' }}} restaurants={restaurants} />);
    expect(wrapper).toMatchSnapshot();
});