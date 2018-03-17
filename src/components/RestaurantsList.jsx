import React from 'react';
import { connect } from 'react-redux';

import RestaurantListItem from './RestaurantListItem';


class RestaurantsList extends React.Component {

    render() {
        if (!this.props.restaurants || this.props.restaurants.length === 0) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div>
                {this.props.restaurants.map((restaurant, i) => (
                    <RestaurantListItem key={i} restaurant={restaurant} index={i} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    };
};

export default connect(mapStateToProps)(RestaurantsList);