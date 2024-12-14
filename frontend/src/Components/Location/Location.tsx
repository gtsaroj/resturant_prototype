import { useTranslation } from "react-i18next";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import BikeGps from "../../assets/bikeGPS.png"
import CarGps from "../../assets/carGPS.png"
import RestaurantGps from "../../assets/restaurantGPS.png"


export const Location = () => {
  const { t } = useTranslation();

  const carIcon  = new Icon({
    iconUrl: CarGps,
    iconSize : [38,38]
  })

  const bikeIcon  = new Icon({
    iconUrl: BikeGps,
    iconSize : [38,38]
  })
  const RestaurantIcon  = new Icon({
    iconUrl: RestaurantGps,
    iconSize : [38,38]
  })

  const markers = [
    {
      geoCode: [27.689083809661316, 85.3341804716429],
      popUP: "Pink Putali",
      icon : RestaurantIcon
    },
    {
      geoCode: [27.68890317395753, 85.33418206419839],
      popUp: "Car Parking",
      icon : carIcon
    }, {
      geoCode: [27.689092143461895, 85.33416164451839],
      popUp: "Bike Parking",
      icon : bikeIcon
    }
  ];

  const navigateToMap = (latitude : number, longitude : number) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank'); // Open in a new tab
  };

  return (
    <section className="py-16 gap-5 sm:gap-16 w-full flex flex-col items-start justify-start ">
      <h2 className="sm:text-3xl text-xl  tracking-wider font-bold ">
        {t("visit")}
      </h2>
      <div className="flex w-full h-[400px] flex-col md:flex-row items-center justify-center gap-8">
        <MapContainer
          zoomAnimation
          scrollWheelZoom ={false}
          className="w-full h-full"
          center={[27.689228596706624, 85.33417805104678]}
          zoom={3000}
      
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map((marker, index) => (
            <>
              <Marker eventHandlers={{
                click: ()=> navigateToMap(marker.geoCode[0], marker.geoCode[1])
              }} key={index} icon={marker.icon} position={marker.geoCode}>
            
              </Marker>
            </>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};
