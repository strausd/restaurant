import React from 'react';
import { shallow } from 'enzyme';

import { MapDetail } from '../../components/MapDetail';
import { restaurants } from '../testData/restaurants'


let wrapper, onMarkerToggle;

beforeAll(() => {
    onMarkerToggle = jest.fn();
    const componentProps = {
        isMarkerShow: true,
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBGyVswgcCkctFs8x4X-14BS16VXWINHPA&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        zoom: 13,
        lat: restaurants[0].location.lat,
        lng: restaurants[0].location.lng,
        onMarkerToggle,
        isOpenMarkerInfo: false,
        restaurant: restaurants[0]
    };
    wrapper = shallow(<MapDetail {...componentProps} />);
});

test('should render MapDetail component properly at root', () => {
    expect(wrapper).toMatchSnapshot();
});