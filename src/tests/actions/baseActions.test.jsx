import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchRestaurants, scrollTo, selectRestaurant } from '../../actions/baseActions';


const createMockStore = configureMockStore([thunk]);

test('verify selectRestaurant returns the proper object', () => {
    const expected = {
        type: 'SELECT_RESTAURANT',
        restaurant: {
            name: 'Sample'
        }
    };
    expect(selectRestaurant({ name: 'Sample' })).toEqual(expected);
});

test('verify scroll to works properly with valid position', () => {
    const expected = {
        type: 'SCROLL_TO',
        id: 5
    };
    expect(scrollTo(5)).toEqual(expected);
});

test('verify scroll to has valid value on number as string position', () => {
    const expected = {
        type: 'SCROLL_TO',
        id: 5
    };
    expect(scrollTo('5')).toEqual(expected);
});

test('verify scroll to has null value on text position', () => {
    const expected = {
        type: 'SCROLL_TO',
        id: null
    };
    expect(scrollTo('test')).toEqual(expected);
});

test('verify scroll to has null value on empty position', () => {
    const expected = {
        type: 'SCROLL_TO',
        id: null
    };
    expect(scrollTo()).toEqual(expected);
});

test('verify fetch restaurants returns json of restaurants', done => {
    const store = createMockStore();
    store.dispatch(fetchRestaurants()).then(() => {
        const action = store.getActions()[0];
        expect(action.type).toBe('FETCH_RESTAURANTS');
        expect(action.restaurants.length).toBe(15);
        done();
    });
});