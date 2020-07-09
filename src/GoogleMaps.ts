import User from "./models/User";
import ILocation from "./models/ILocation";

class GoogleMaps {
  map: google.maps.Map;

  constructor(idEelement: string) {
    const mapDiv = document.getElementById(idEelement);
    const latLng: google.maps.LatLngLiteral = {
      lat: 0,
      lng: 0,
    };
    this.map = new google.maps.Map(mapDiv, {
      clickableIcons: true,
      zoom: 2.0,
      center: latLng,
    });
  }

  addMarker(info: ILocation) {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: info.location.latitude,
        lng: info.location.longitude,
      },
    });

    marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({content: info.getContent()})

        infoWindow.open(this.map, marker);
    })

  }
}

export default GoogleMaps;
