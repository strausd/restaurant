import React from 'react';
import { connect } from 'react-redux';

import MapMulti from './MapMulti';
import { getMapInfoArray } from '../misc/utils';


export class MapPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant_marker_info: []
        };
    }

    componentWillMount() {
        if (!this.props.restaurants || this.props.restaurants.length < 1) {
            this.setState({ restaurant_marker_info: [] });
        } else {
            const restaurants = getMapInfoArray(this.props.restaurants);
            this.setState({ restaurant_marker_info: restaurants });
        }
    }
    

    componentWillReceiveProps(nextProps) {
        if (!nextProps.restaurants || nextProps.restaurants.length < 1) {
            this.setState({ restaurant_marker_info: [] });
        } else {
            const restaurants = getMapInfoArray(nextProps.restaurants);
            this.setState({ restaurant_marker_info: restaurants });
        }
    }

    onMarkerToggle = (index) => {
        this.setState(prevState => {
            return {
                restaurant_marker_info: prevState.restaurant_marker_info.map((r, r_index) => {
                    if (index === r_index) {
                        return {
                            ...r,
                            isOpenMarkerInfo: !r.isOpenMarkerInfo
                        };
                    } else {
                        return {
                            ...r,
                            isOpenMarkerInfo: false
                        };
                    }
                })
            };
        });
    }

    render() {
        if (!this.props.restaurants || this.props.restaurants.length < 1) {
            return (
                <div className="page-content">
                    Loading...
                </div>
            );
        } else {
            return (
                <div className="page-content">
                    <div className="map-page">
                        <MapMulti 
                            isMarkerShow={true}
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGyVswgcCkctFs8x4X-14BS16VXWINHPA&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            lat={32.98}
                            lng={-96.835}
                            zoom={13}
                            onMarkerToggle={this.onMarkerToggle}
                            restaurants={this.state.restaurant_marker_info}
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