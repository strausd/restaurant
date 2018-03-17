import React from 'react';
import { connect } from 'react-redux';

import MapDetail from './MapDetail';


export class MapPage extends React.Component {

    state = {
        isOpenMarkerInfo: false
    };

    onMarkerToggle = () => {
        this.setState({ isOpenMarkerInfo: !this.state.isOpenMarkerInfo });
    }

    render() {
        if (!this.props.restaurants || this.props.restaurants.length < 1) {
            console.log('Loading');
            return (
                <div className="page-content">
                    Loading...
                </div>
            );
        } else {
            const restaurant = this.props.restaurants[0];
            return (
                <div className="page-content">
                    <div className="map-page">
                        <MapDetail 
                            isMarkerShow={true}
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGyVswgcCkctFs8x4X-14BS16VXWINHPA&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            lat={restaurant.location.lat}
                            lng={restaurant.location.lng}
                            zoom={13}
                            isOpenMarkerInfo={this.state.isOpenMarkerInfo}
                            onMarkerToggle={this.onMarkerToggle}
                            restaurant={restaurant}
                        />
                    </div>
                </div>
            );
        }
        
    }
}

const mapStateToProps = ({ restaurants }) => {
    return {
        restaurants
    };
};

export default connect(mapStateToProps)(MapPage);