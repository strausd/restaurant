export const getMapInfoArray = locationList => {
    return locationList.map(l => {
        return {
            name: l.name,
            lat: l.location.lat,
            lng: l.location.lng,
            isOpenMarkerInfo: false,
            gMapsQuery: getGMapsLocationQuery(l)
        };
    });
};

export const getGMapsLocationQuery = loc => {
    return encodeURIComponent(
        loc.name + ' ' +
        loc.location.address + ' ' +
        loc.location.city + ' ' +
        loc.location.state + ' ' +
        loc.location.postalCode
    );
};