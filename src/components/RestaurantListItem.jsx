import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectRestaurant } from '../actions/baseActions';


export class RestaurantListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleRestaurantClick = () => {
        this.props.selectRestaurant(this.props.restaurant);
    };

    render() {
        return (
            <div className="restaurant-item" id={this.props.index}>
                <Link to={'/' + this.props.index} onClick={this.handleRestaurantClick} >
                    <div className="restaurant-item__info">
                        <h2>{this.props.restaurant.name}</h2>
                        <div className="restaurant-item__category">{this.props.restaurant.category}</div>
                    </div>
                    <div className="restaurant-item__img">
                        <img src={this.props.restaurant.backgroundImageURL} align="middle" />
                    </div>
                </Link>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectRestaurant: restaurant => dispatch(selectRestaurant(restaurant))
    };
};

export default connect(undefined, mapDispatchToProps)(RestaurantListItem);