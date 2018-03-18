import axios from 'axios';


export const fetchRestaurants = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'
        }).then(response => {
            dispatch({
                type: 'FETCH_RESTAURANTS',
                restaurants: response.data.restaurants
            });
        }).catch((e, res) => {
            console.log(e);
            dispatch({
                type: 'FETCH_RESTAURANTS',
                restaurants: []
            });
        });
    };
};

export const selectRestaurant = restaurant => {
    return {
        type: 'SELECT_RESTAURANT',
        restaurant
    };
};