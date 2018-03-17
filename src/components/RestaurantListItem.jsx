import React from 'react';
import { Link } from 'react-router-dom';


const RestaurantListItem = ({ restaurant, index }) => (
    <div className="restaurant-item">
        <Link to={'/' + index} >
            <div className="restaurant-item__info">
                <h2>{restaurant.name}</h2>
                <div className="restaurant-item__category">{restaurant.category}</div>
            </div>
            <div className="restaurant-item__img">
                <img src={restaurant.backgroundImageURL} align="middle" />
            </div>
        </Link>
    </div>
);

export default RestaurantListItem;