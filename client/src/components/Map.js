import GoogleMap from "google-maps-react-markers";
import Marker from "./Marker";

function Map({
  setSidebarOpen,
  selectedMarkers,
  setSelectedMarker,
  selectedMarker,
  onGoogleApiLoaded,
}) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        apiKey="AIzaSyDdXJ9K8w8CVA8FHBsestW77mdwzpDxZ2o"
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
        onGoogleApiLoaded={onGoogleApiLoaded}
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

export default Map;
