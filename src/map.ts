import { Student } from "./student";
import { Internship } from "./internship";

// google map and related methods
export class Map {

  private googleMap: google.maps.Map;

  constructor(divId: string) {

    // new map around Vacnovuer
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 10,
      center: {
        lat: 49.246292,
        lng: -123.116226
      }
    });
  }

  // add a marker to map
  addMarker(pin: Student | Internship): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: pin.location.latitude,
        lng: pin.location.longtitude
      }
    });

    // apply marker message by object type/class
    if (pin instanceof Student) {
      this.markerMessage(marker, `Student Name:${pin.firstName} ${pin.lastName}`);
    } else {
      this.markerMessage(marker, `Welcome to ${pin.businessName}'s internship!`);
    }
  }

  // private method for setting up marker message
  private markerMessage(marker: google.maps.Marker, message: string): void {
    const infowindow = new google.maps.InfoWindow({
      content: message,
    });

    marker.addListener("click", () => {
      infowindow.open(this.googleMap, marker);
    });
  }
}