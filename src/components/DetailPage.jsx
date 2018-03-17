import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RestaurantDetailItem from './RestaurantDetailItem';


export class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.id = Number(props.match.params.id);
    }

    render() {
        if (isNaN(this.id)) {
            return <Redirect to="/" />
        } else if (!this.props.restaurants || this.props.restaurants.length < 1) {
            return (
                <div className="page-content">
                    Loading...
                </div>
            );
        } else {
            const restaurant = this.props.restaurants[this.id];
            return (
                <div className="page-content">
                    <RestaurantDetailItem restaurant={restaurant} />
                </div>
            );
        }
        console.log(this.props.restaurants);
    }
}

const mapStateToProps = ({ restaurants }) => {
    return {
        restaurants
    };
};

export default connect(mapStateToProps)(DetailPage);