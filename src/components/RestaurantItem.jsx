import React from 'react';


const RestaurantItem = ({ restaurant }) => (
    <div className="restaurant-item">
        <a href="#">
            <div className="restaurant-item__info">
                <h2>{restaurant.name}</h2>
                <div className="restaurant-item__category">{restaurant.category}</div>
            </div>
            <div className="restaurant-item__img">
                <img src={restaurant.backgroundImageURL} align="middle" />
            </div>
        </a>
    </div>
);

export default RestaurantItem;