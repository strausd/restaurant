import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RestaurantDetailItem from './RestaurantDetailItem';


export class DetailPage extends React.Component {
    render() {
        const id = this.props.match.params.id;
        if (isNaN(id)) {
            return <Redirect to="/" />
        } else if (!this.props.restaurants || this.props.restaurants.length < 1) {
            return (
                <div className="page-content">
                    Loading...
                </div>
            );
        } else {
            const restaurant = this.props.restaurants[id];
            return (
                <div className="page-content">
                    <RestaurantDetailItem restaurant={restaurant} />
                </div>
            );
        }
    }
}


const mapStateToProps = ({ restaurants, restaurant }) => {
    return {
        restaurants,
        restaurant
    };
};

export default connect(mapStateToProps)(DetailPage);