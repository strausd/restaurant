import React from 'react';
import MapDetail from './MapDetail';

// isOpenMarkerInfo
// onMarkerToggle
// AIzaSyBGyVswgcCkctFs8x4X-14BS16VXWINHPA-oE
class RestaurantDetailItem extends React.Component  {
    restaurant = this.props.restaurant;

    destination_str = encodeURIComponent(
        this.restaurant.name + ' ' +
        this.restaurant.location.address + ' ' +
        this.restaurant.location.city + ' ' +
        this.restaurant.location.state + ' ' +
        this.restaurant.location.postalCode
    );

    state = {
        isOpenMarkerInfo: false
    };

    onMarkerToggle = () => {
        this.setState({ isOpenMarkerInfo: !this.state.isOpenMarkerInfo });
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
                        isOpenMarkerInfo={this.state.isOpenMarkerInfo}
                        onMarkerToggle={this.onMarkerToggle}
                        restaurant={this.restaurant}
                    />
                </div>
                <div className="restaurant-detail__header">
                    <h2>{this.restaurant.name}</h2>
                    <div className="restaurant-detail__category">{this.restaurant.category}</div>
                </div>
                <div className="restaurant-detail__info">
                    <div className="restaurant-detail__address">
                        <a target="_blank" href={'https://www.google.com/maps/dir/?api=1&destination=' + this.destination_str}>
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
                                <div className="restaurant-detail__twitter">
                                    <a href={'https://twitter.com/' + this.restaurant.contact.twitter} target="_blank" >@{this.restaurant.contact.twitter}</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
};

export default RestaurantDetailItem;