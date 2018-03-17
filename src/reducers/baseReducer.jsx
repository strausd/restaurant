export const restaurants = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_RESTAURANTS':
            return {
                ...state,
                restaurants: action.restaurants
            };
        default:
            return state;
    }
};
