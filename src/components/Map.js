import React, { useRef, useEffect, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// import mapboxgl from '!mapbox-gl';
// eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken = 'pk.eyJ1IjoibWt5YnVuIiwiYSI6ImNremZ3NnphcDAxMm0yeHFob3V5YzlkNGcifQ.4a7XtXajYUWmj0DHVoZGAA';

export default function Mapbox() {


  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(-88.0024336733652);
  // const [lat, setLat] = useState(42.26542185364574);
  // const [zoom, setZoom] = useState(15);

  // useEffect(() => {
  //     if (map.current) return;
  //     map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/dark-v10',
  //     center: [lng, lat],
  //     zoom: zoom
  //     });
  // });

  return (
    <div>
      {/* <div ref={mapContainer} className="map-container" /> */}
      <Map
        className="mapbox"
        initialViewState={{
          latitude: 42.26542185364574,
          longitude: -88.0024336733652,
          zoom: 14,
        }}
        style={{ width: 400, height: 300 }}
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
