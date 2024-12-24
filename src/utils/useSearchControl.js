// utils/useSearchControl.js
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";

export function AddSearchControl() {
  const map = useMap();

  useEffect(() => {
    if (!L.Control.Geocoder) {
      console.error("Geocoder control not available");
      return;
    }

    const geocoder = new L.Control.Geocoder.Nominatim();

    const searchControl = new L.Control.Geocoder({
      defaultMarkGeocode: false,
      position: "topleft",
      placeholder: "Search for a city...",
      geocoder: geocoder,
      suggestMinLength: 3,
      errorMessage: "Unable to find location",
    });

    searchControl.addTo(map);

    searchControl.on("markgeocode", (e) => {
      const { center } = e.geocode;
      map.setView(center, 10);
    });

    return () => searchControl.remove();
  }, [map]);

  return null;
}
