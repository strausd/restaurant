import React from 'react';
import { connect } from 'react-redux'

import { fetchRestaurants } from '../actions/baseActions';
import RestaurantsList from './RestaurantsList';


export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        props.fetchRestaurants();
    }

    render() {
        return (
            <div className="page-content">
                <RestaurantsList />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants())
    };
};

export default connect(undefined, mapDispatchToProps)(HomePage);