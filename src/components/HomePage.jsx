import React from 'react';
import { connect } from 'react-redux'

import RestaurantsList from './RestaurantsList';


export const HomePage = () => {
    return (
        <div className="page-content">
            <RestaurantsList />
        </div>
    );
};

export default HomePage;