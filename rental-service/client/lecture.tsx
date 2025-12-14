// Код 1
export const CITY = {
    title: 'Нью-Йорк',
    lat: 40.835292,
    lng: -73.916236,
    zoom: 10
};

// Код 2
export const POINT = [
    {
        title: 'Саундвью',
        lat: 40.816881,
        lng: -73.872768,     
    },
    {
        title: 'Ферри Поинт',
        lat: 40.814909,
        lng: -73.830682,     
    },
    {
        title: 'Бронкс',
        lat: 40.862413,
        lng: -73.879357,     
    },
    {
        title: 'Индвуд-Хилл',
        lat: 40.870817,
        lng: -73.927112,     
    },
    {
        title: 'Пелхэм-Бей-Парк',
        lat: 40.877312,
        lng: -73.807182,     
    }
];

// Код 3
function List({points, onListItemHover}) {
    const handleListItemHover = (evt) => {
        onListItemHover(evt.target.innerText);
    };

    return (
        <ul className="list">{
            points.map((point, index) => {
                const keyValue = `${index}-${point.title}`;

                return (
                    <li className="List__item" key={keyValue} onMouseEnter={handleListItemHover}>
                        {point.title}
                    </li>
                );
            })
        }</ul>
    );
}

// Код 4
import React from "react";
import List from './list.js';
import {CITY} from './mock/city.js';
import {POINTS} from './mock/points.js';
import Map from './map.js';

function App() {
    const [selectedPoint, setSelectedPoint] = useState({});

    const handleListItemHover = (listItemName) => {
        const currentPoint = POINTS.find((point) =>
            point.title === listItemName,
        );
        setSelectedPoint(currentPoint);
    };

    return (
        <React.Fragment>
            <header>
                <h1>Парки города {CITY.title}:</h1>
            </header>
            <main>
                <List points={POINTS} onListItemHover={handleListItemHover}/>
                <map city={CITY} points={POINTS} selectedPoint={selectedPoint}/>
            </main>
        </React.Fragment>
    );
}

export default App;

// Код 5
import React, {useRef} from "react";
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css'
import useMap from './useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from './const';

function Map({city}) {
    const mapRef = useRef(null);
    const map = useMap(mapRef, city);

    const defaultCustomIcon = leaflet.icon({
        iconURL: URL_MARKER_DEFAULT,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    const currentCustomIcon = leaflet.icon({
        iconURL: URL_MARKER_CURRENT,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    useEffect(() => {
        if (map) {
            points.forEach((point) => {
                leaflet
                .marker({
                    lat: point.lat,
                    lng: point.lng,
                }, {
                    icon: defaultCustomIcon
                })
                .addTo(map);
            });
        }
    }, [map, points])

    return (
        <div style={{height: '500 px'}} ref={mapRef}></div>
    );
}

export default Map;

// Код 6 
import { useEffect, useState, MutableRefObject, useRef } from "react";
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/types';

function useMap(
    mapRef: MutableRefObject<HTMLElement | null>,
    city: City
): Map | null {
    const [map, setMap] = useState(Map | null>(null);
    const isRenderedRef = useRef<boolean>(false);

    useEffect(() => {
        if (mapRef.current !== null && !isRenderedRef.current) {
            const instance = new Map(mapRef.current, {
                center: {
                    lat: city.lat,
                    lat: city.lng
                },
                zoom: 10
            )};

            const layer = new TileLayer(
                'https://{s}.basemaps.cartocdn.com/restertiles/voyager/{z}/{x}/{y}{r}.png',
                {
                    attribution:
                        '&copy; <a href="https://www.openstreermap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://...'                      
                }
            );

            instanceof.addLayer(layer);

            setMap(instance);
            isRenderedRef.current = true;
        }
    }, [mapRef, city]);

    return map;
}

export default useMap;