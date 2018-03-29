import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

import { getGMapsLocationQuery } from '../misc/utils';


export const MapDetail = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={props.zoom}
        center={{ lat: props.lat, lng: props.lng }}
    >
        <Marker position={{ lat: props.lat, lng: props.lng }} onClick={() => props.onMarkerToggle()}>
            {props.isOpenMarkerInfo && <InfoWindow onCloseClick={props.onMarkerToggle}>
                <div className="marker-info">
                    <div className="marker-info__name">{props.restaurant.name}</div>
                    <div className="marker-info__directions">
                        <a target="_blank" href={'https://www.google.com/maps/dir/?api=1&destination=' + getGMapsLocationQuery(props.restaurant)}>
                            Get Directions
                        </a>
                    </div>
                </div>
            </InfoWindow>}
        </Marker>
    </GoogleMap>
));

export default MapDetail;