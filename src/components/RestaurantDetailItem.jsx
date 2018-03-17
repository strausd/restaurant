import React from 'react';


const RestaurantDetailItem = ({ restaurant }) => {
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
                    {restaurant.location.address}
                    <br/>
                    {restaurant.location.city}, {restaurant.location.state} {restaurant.location.postalCode}
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