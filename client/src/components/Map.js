import GoogleMap from "google-maps-react-markers";
import Marker from "./Marker";

export default function Map({
  setSidebarOpen,
  selectedMarkers,
  setSelectedMarker,
  selectedMarker,
}) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        apiKey="AIzaSyCpXLdGfpW0RtEPPDZBSgs4kB3EHDGfOeY"
        defaultCenter={{
          lat: 52.240927,
          lng: 21.024115,
        }}
        defaultZoom={11}
        options={{
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
        }}
      >
        {selectedMarkers.map((marker) => {
          return (
            <Marker
              setSidebarOpen={setSidebarOpen}
              {...marker}
              key={marker.id}
              setSelectedMarker={setSelectedMarker}
              selectedMarker={selectedMarker}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
}
