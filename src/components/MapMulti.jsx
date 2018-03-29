import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

export const MapDetail = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
        {props.restaurants.map((r, index) => {
            return (
                <Marker key={index} position={{ lat: r.lat, lng: r.lng }} onClick={() => props.onMarkerToggle(index)}>
                    {r.isOpenMarkerInfo && <InfoWindow onCloseClick={props.onMarkerToggle}>
                        <div className="marker-info">
                            <div className="marker-info__name">{r.name}</div>
                            <div className="marker-info__directions">
                                <a target="_blank" href={'https://www.google.com/maps/dir/?api=1&destination=' + r.gMapsQuery}>
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </InfoWindow>}
                </Marker>
            );
        })}
    </GoogleMap>
));

export default MapDetail;