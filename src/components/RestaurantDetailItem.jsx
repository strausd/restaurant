import React from 'react';


import MapDetail from './MapDetail';
import { getMapInfoArray, getGMapsLocationQuery } from '../misc/utils';


// AIzaSyBGyVswgcCkctFs8x4X-14BS16VXWINHPA-oE
class RestaurantDetailItem extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            restaurant_marker_info: []
        };
    }

    restaurant = this.props.restaurant;

    componentWillMount() {
        this.setState({ restaurant_marker_info: getMapInfoArray([this.props.restaurant]) });
    }

    onMarkerToggle = () => {
        this.setState({ isOpenMarkerInfo: !this.state.isOpenMarkerInfo });
    }

    onMarkerToggle = (index) => {
        this.setState(prevState => {
            const r = prevState.restaurant_marker_info[0];
            return {
                restaurant_marker_info: [{
                    ...r,
                    isOpenMarkerInfo: !r.isOpenMarkerInfo
                }]
            };
        });
    }

    render() {
        return (
            <div className="restaurant-detail">
                <div className="restaurant-detail__map">
                    <MapDetail 
                        isMarkerShow={true}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGyVswgcCkctFs8x4X-14BS16VXWINHPA&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        lat={this.restaurant.location.lat}
                        lng={this.restaurant.location.lng}
                        zoom={13}
                        onMarkerToggle={this.onMarkerToggle}
                        restaurants={this.state.restaurant_marker_info}
                    />
                </div>
                <div className="restaurant-detail__header">
                    <h2>{this.restaurant.name}</h2>
                    <div className="restaurant-detail__category">{this.restaurant.category}</div>
                </div>
                <div className="restaurant-detail__info">
                    <div className="restaurant-detail__address">
                        <a target="_blank" href={'https://www.google.com/maps/dir/?api=1&destination=' + getGMapsLocationQuery(this.restaurant)}>
                            {this.restaurant.location.address}
                            <br/>
                            {this.restaurant.location.city}, {this.restaurant.location.state} {this.restaurant.location.postalCode}
                        </a>
                    </div>
                    {
                        !this.restaurant.contact ? null : (
                            <div>
                                <div className="restaurant-detail__phone">
                                    <a href={'tel:' + this.restaurant.contact.phone} >{this.restaurant.contact.formattedPhone}</a>
                                </div>
                                {!this.restaurant.contact.twitter ? null : (
                                    <div className="restaurant-detail__twitter">
                                        <a href={'https://twitter.com/' + this.restaurant.contact.twitter} target="_blank" >@{this.restaurant.contact.twitter}</a>
                                    </div>
                                )}
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
};

export default RestaurantDetailItem;