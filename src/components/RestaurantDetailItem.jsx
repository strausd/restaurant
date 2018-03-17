import React from 'react';

// AIzaSyCRGU4zvepa0suuU1BZu_tWiEn7ho5MSEc
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