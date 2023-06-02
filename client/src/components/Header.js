import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Header = ({ mapRef }) => {
  const [position, setPosition] = useState(null);
  const getPosition = (position) => {
    setPosition(position);
    // eslint-disable-next-line no-undef
    const geocoder = new google.maps.Geocoder();
    geocoder
      .geocode({ placeId: position.value.place_id })
      .then(({ results }) => {
        mapRef.current.setCenter({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        });
      });
  };
  return (
    <div className="header">
      <div className="search">
        <GooglePlacesAutocomplete
          apiKey="AIzaSyDdXJ9K8w8CVA8FHBsestW77mdwzpDxZ2o"
          selectProps={{
            position,
            onChange: getPosition,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
