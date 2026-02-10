import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
type MapProps = {
  city: { name: string; location: { latitude: number; longitude: number; zoom: number } } | undefined;
  offers: Array<{ id: string; location: { latitude: number; longitude: number } }>;
  hoveredOfferId?: string;
};

const Map = ({ city, offers, hoveredOfferId }: MapProps): React.JSX.Element => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || !city) {
      return;
    }

    if (mapInstanceRef.current === null) {
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [city.location.latitude, city.location.longitude],
        zoom: city.location.zoom,
        zoomControl: false,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInstanceRef.current);
    } else {
      mapInstanceRef.current.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }

    const defaultIcon = L.icon({
      iconUrl: '/img/pin.svg',
      iconSize: [27, 39],
      iconAnchor: [13, 39],
    });

    const activeIcon = L.icon({
      iconUrl: '/img/pin-active.svg',
      iconSize: [27, 39],
      iconAnchor: [13, 39],
    });

    const markersLayer = L.layerGroup();
    const markersMap: Record<string, L.Marker> = {};

    offers.forEach((offer) => {
      const lat = offer.location.latitude;
      const lng = offer.location.longitude;
      const isActive = offer.id === hoveredOfferId;

      const marker = L.marker([lat, lng], { icon: isActive ? activeIcon : defaultIcon });
      markersMap[offer.id] = marker;
      marker.addTo(markersLayer);
    });

    markersLayer.addTo(mapInstanceRef.current);

    return () => {
      markersLayer.clearLayers();
      if (mapInstanceRef.current && mapInstanceRef.current.hasLayer(markersLayer)) {
        mapInstanceRef.current.removeLayer(markersLayer);
      }
    };
  }, [city, offers, hoveredOfferId]);

  return <section className="cities__map map" ref={mapRef} style={{ minHeight: 480 }}></section>;
};

export { Map };
