import {Helmet} from "react-helmet";
import React, { useRef, useEffect, useState, Text } from "react";

import tt from "@tomtom-international/web-sdk-maps";
import { services } from "@tomtom-international/web-sdk-services";

import "@tomtom-international/web-sdk-maps/dist/maps.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCar, faPersonBiking, faPersonWalking, faLeftRight} from "@fortawesome/free-solid-svg-icons";

import {start_latitude, start_longetude} from './../../files_to_modify/map'
import "./Map.css";

const API_KEY = 'DrEjy3QJFmFNgheAOGDhghrkVpAbuaju';
const MAP_START = [start_longetude, start_latitude];

function Map() {
    const mapElement = useRef();
    const [map, setMap] = useState();
    const [markers, setMarkers] = useState([]);
    const [transportation, setTransportation] = useState("car");

    useEffect(() => {
        const map = tt.map({
        key: API_KEY,
        container: mapElement.current,
        center: MAP_START,
        zoom: 12
        });
        setMap(map);
        return () => map.remove();
    }, []);

    useEffect(() => {
        map && map.on("click", addMarker);
        return () => map && map.off("click", addMarker);
    }, [map, markers]);

    const addMarker = (event) => {
        if (markers.length < 2) {
        const marker = new tt.Marker().setLngLat(event.lngLat).addTo(map);
        setMarkers((markers) => [...markers, marker]);
        }
    };

    const clear = () => {
        markers.forEach((marker) => marker.remove());
        setMarkers([]);

        removeRoute("green");
    };

    const reverse_path = () => {
        removeRoute("green");
        if (markers.length==2){
            setMarkers(markers.reverse());
            const key = API_KEY;
            const locations = markers.map((marker) => marker.getLngLat());

            calculateRoute("green", {
            key,
            locations,
            travelMode: transportation
            });
        }

    }
    const car_path = () => {
        removeRoute("green");
        if (markers.length==2){
            const key = API_KEY;
            const locations = markers.map((marker) => marker.getLngLat());

            calculateRoute("green", {
            key,
            locations,
            travelMode: "car"
            });
        }

        setTransportation("car")
    };

    const walk_path = () => {
        removeRoute("green");
        
        if (markers.length==2){
            const key = API_KEY;
            const locations = markers.map((marker) => marker.getLngLat());

            calculateRoute("green", {
            key,
            locations,
            travelMode: "pedestrian"
            });
        }

        setTransportation("pedestrian")
    };

    const bicycle_path = () => {
        removeRoute("green");
        
        if (markers.length==2){
            const key = API_KEY;
            const locations = markers.map((marker) => marker.getLngLat());

            calculateRoute("green", {
            key,
            locations,
            travelMode: "bicycle"
            });
        }

        setTransportation("bicycle")
    };

    const route = () => {
        if (markers.length < 2) return;
        if (map.getLayer("green")) return;

        const key = API_KEY;
        const locations = markers.map((marker) => marker.getLngLat());

        calculateRoute("green", {
        key,
        locations,
        travelMode: transportation
        });
    };

    const calculateRoute = async (color, routeOptions) => {
        try {
        const response = await services.calculateRoute(routeOptions);
        const geojson = response.toGeoJson();

        map.addLayer({
            id: color,
            type: "line",
            source: {
            type: "geojson",
            data: geojson
            },
            paint: {
            "line-color": color,
            "line-width": 6
            }
        });
        } catch (error) {
        console.error(error);
        }
    };

    const removeRoute = (id) => {
        if (map.getLayer("green")){
            map.removeLayer(id);
            map.removeSource(id);
        }
    };

    return (
        <div className="App">
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Map</title>
            </Helmet>

            <div ref={mapElement} className="mapDiv">
                <button className="instructions">Click on the map to set the route endpoints</button>
                <button className="clearButton" onClick={clear}>
                Clear Route
                </button>
                <button className="routeButton" onClick={route}>
                Calculate Route
                </button>
                <button className='car' onClick={car_path}>
                    <FontAwesomeIcon icon={faCar} size="2x" />
                </button>
                <button className='bike' onClick={bicycle_path}>
                    <FontAwesomeIcon icon={faPersonBiking} size="2x" />
                </button>
                <button className='walk' onClick={walk_path}>
                    <FontAwesomeIcon icon={faPersonWalking} size="2x" />
                </button>
                <button className='reverse' onClick={reverse_path}>
                    <FontAwesomeIcon icon={faLeftRight} size="2x" />
                </button>
            </div>
        </div>
  );
}

export default Map;
