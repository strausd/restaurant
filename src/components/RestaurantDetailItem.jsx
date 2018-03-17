import React from 'react';
import MapDetail from './MapDetail';


// AIzaSyBGyVswgcCkctFs8x4X-14BS16VXWINHPA-oE
const RestaurantDetailItem = ({ restaurant }) => {
    const destination_str = encodeURIComponent(
        restaurant.name + ' ' +
        restaurant.location.address + ' ' +
        restaurant.location.city + ' ' +
        restaurant.location.state + ' ' +
        restaurant.location.postalCode
    );
    return (
        <div className="restaurant-detail">
            <div className="restaurant-detail__map">
                <MapDetail 
                    isMarkerShow={true}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGyVswgcCkctFs8x4X-14BS16VXWINHPA&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    lat={restaurant.location.lat}
                    lng={restaurant.location.lng}
                    zoom={13}
                />
            </div>
            <div className="restaurant-detail__header">
                <h2>{restaurant.name}</h2>
                <div className="restaurant-detail__category">{restaurant.category}</div>
            </div>
            <div className="restaurant-detail__info">
                <div className="restaurant-detail__address">
                    <a target="_blank" href={'https://www.google.com/maps/dir/?api=1&destination=' + destination_str}>
                        {restaurant.location.address}
                        <br/>
                        {restaurant.location.city}, {restaurant.location.state} {restaurant.location.postalCode}
                    </a>
                </div>
                {
                    !restaurant.contact ? null : (
                        <div>
                            <div className="restaurant-detail__phone">
                                <a href={'tel:' + restaurant.contact.phone} >{restaurant.contact.formattedPhone}</a>
                            </div>
                            <div className="restaurant-detail__twitter">
                                <a href={'https://twitter.com/' + restaurant.contact.twitter} target="_blank" >@{restaurant.contact.twitter}</a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RestaurantDetailItem;