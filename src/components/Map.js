import React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


export default function Mapbox() {

  return (
    <div className="mapbox">
      <Map
        initialViewState={{
          latitude: 42.26542185364574,
          longitude: -88.0024336733652,
          zoom: 14,
        }}
        style={{ width: 400, height: 400 }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken="pk.eyJ1IjoidHJ1bmdwaGFuOTkiLCJhIjoiY2txZmI3cDl5MG42ODJvc2N1emRqcndqYyJ9.-QdtnY-bLP8PSXMwwXuQEA"
      >
        <Marker
          longitude={-88.0024336733652}
          latitude={42.26542185364574}
          anchor="center"
        ></Marker>
      </Map>
    </div>
  );
}
