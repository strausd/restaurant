import { restaurants } from '../testData/restaurants';
import { getMapInfoArray, getGMapsLocationQuery } from '../../misc/utils';


test('verify get google maps location url is working', () => {
    const restaurant = restaurants[0];
    const custom = encodeURIComponent(
        restaurant.name + ' ' +
        restaurant.location.address + ' ' +
        restaurant.location.city + ' ' +
        restaurant.location.state + ' ' +
        restaurant.location.postalCode
    );
    expect(custom).toEqual(getGMapsLocationQuery(restaurant));
});

test('verify get map info is working properly', () => {
    const custom = restaurants.map(l => {
        return {
            name: l.name,
            lat: l.location.lat,
            lng: l.location.lng,
            isOpenMarkerInfo: false,
            gMapsQuery: getGMapsLocationQuery(l)
        };
    });
    expect(custom).toEqual(getMapInfoArray(restaurants));
});