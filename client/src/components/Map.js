import OtherIcon from "../icons/Other";
import GoogleMap from "google-maps-react-markers";

const Marker = ({ setSidebarOpen }) => {
  return (
    <div className="marker" onClick={() => setSidebarOpen(true)}>
      <OtherIcon />
    </div>
  );
};

export default function Map({ setSidebarOpen }) {
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
        }}
      >
        <Marker
          setSidebarOpen={setSidebarOpen}
          lat={52.240927}
          lng={21.024115}
        />
      </GoogleMap>
    </div>
  );
}
