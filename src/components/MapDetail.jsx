import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MapDetail = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
        <Marker position={{ lat: props.lat, lng: props.lng }}>
            <InfoWindow>
                <div>Testing</div>
            </InfoWindow>
        </Marker>
    </GoogleMap>
));

export default MapDetail;