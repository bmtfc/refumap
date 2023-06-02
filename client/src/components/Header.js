import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Header = ({ position, setPosition }) => {
  return (
    <div className="header">
      <div className="search">
        <GooglePlacesAutocomplete
          apiKey="AIzaSyDdXJ9K8w8CVA8FHBsestW77mdwzpDxZ2o"
          selectProps={{
            position,
            onChange: setPosition,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
