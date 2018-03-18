import React from 'react';


import MapDetail from './MapDetail';
import { getMapInfoArray, getGMapsLocationQuery } from '../misc/utils';


// AIzaSyBGyVswgcCkctFs8x4X-14BS16VXWINHPA-oE
class RestaurantDetailItem extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { isOpenMarkerInfo: false };
    }

    onMarkerToggle = () => {
        this.setState({ isOpenMarkerInfo: !this.state.isOpenMarkerInfo });
    }

    render() {
        console.log('New', this.props.restaurant.name);
        return (
            <div className="restaurant-detail">
                <div className="restaurant-detail__map">
                    <MapDetail 
                        isMarkerShow={true}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGyVswgcCkctFs8x4X-14BS16VXWINHPA&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        lat={this.props.restaurant.location.lat}
                        lng={this.props.restaurant.location.lng}
                        zoom={13}
                        onMarkerToggle={this.onMarkerToggle}
                        isOpenMarkerInfo={this.state.isOpenMarkerInfo}
                        restaurant={this.props.restaurant}
                    />
                </div>
                <div className="restaurant-detail__header">
                    <h2>{this.props.restaurant.name}</h2>
                    <div className="restaurant-detail__category">{this.props.restaurant.category}</div>
                </div>
                <div className="restaurant-detail__info">
                    <div className="restaurant-detail__address">
                        <a target="_blank" href={'https://www.google.com/maps/dir/?api=1&destination=' + getGMapsLocationQuery(this.props.restaurant)}>
                            {this.props.restaurant.location.address}
                            <br/>
                            {this.props.restaurant.location.city}, {this.props.restaurant.location.state} {this.props.restaurant.location.postalCode}
                        </a>
                    </div>
                    {
                        !this.props.restaurant.contact ? null : (
                            <div>
                                <div className="restaurant-detail__phone">
                                    <a href={'tel:' + this.props.restaurant.contact.phone} >{this.props.restaurant.contact.formattedPhone}</a>
                                </div>
                                {!this.props.restaurant.contact.twitter ? null : (
                                    <div className="restaurant-detail__twitter">
                                        <a href={'https://twitter.com/' + this.props.restaurant.contact.twitter} target="_blank" >@{this.props.restaurant.contact.twitter}</a>
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