import React from "react";
import GoogleMapReact from "google-map-react";

export default function Map() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCpXLdGfpW0RtEPPDZBSgs4kB3EHDGfOeY" }}
        defaultCenter={{
          lat: 10.99835602,
          lng: 77.01502627,
        }}
        defaultZoom={11}
      >
        {[]}
      </GoogleMapReact>
    </div>
  );
}
