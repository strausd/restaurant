import React from 'react';


const RestaurantItem = ({ restaurant }) => (
    <div className="restaurant-item">
        <a href="#">
            <img src={restaurant.backgroundImageURL} align="middle" />
        </a>
    </div>
);

export default RestaurantItem;