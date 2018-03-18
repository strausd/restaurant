import React from 'react';
import { connect } from 'react-redux'

import RestaurantsList from './RestaurantsList';


export const HomePage = (props) => {
    console.log(props);
    return (
        <div className={props.location.pathname === '/' ? 'page-content' : 'page-content hidden-mobile'}>
            <RestaurantsList />
        </div>
    );
};

export default HomePage;