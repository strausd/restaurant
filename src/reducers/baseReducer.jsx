export const restaurants = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_RESTAURANTS':
            return {
                ...state,
                restaurants: action.restaurants
            };
        case 'SELECT_RESTAURANT':
            return {
                ...state,
                selected: action.restaurant
            };
        default:
            return state;
    }
};
