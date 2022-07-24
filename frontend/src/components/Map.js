import GoogleMapReact from "google-map-react";
import pin from "../images/Pin.svg";

const Marker = () => <img alt="маркер" src={pin}></img>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 56.8361609,
      lng: 60.6143581,
    },
    zoom: 12,
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={56.8361609} lng={60.6143581}/>
      </GoogleMapReact>
    </div>
  );
}
