import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from '../../components/HomePage';


let scrollTo;

beforeAll(() => {
    scrollTo = jest.fn();
});

test('should render HomePage component properly at root', () => {
    const wrapper = shallow(<HomePage scrollTo={scrollTo} location={{ pathname: '/' }} />);
    expect(wrapper).toMatchSnapshot();
    expect(scrollTo).toHaveBeenCalledWith('');
});

test('should render HomePage component properly at detail', () => {
    const wrapper = shallow(<HomePage scrollTo={scrollTo} location={{ pathname: '/0' }} />);
    expect(wrapper).toMatchSnapshot();
    expect(scrollTo).toHaveBeenCalledWith('0');
});