import { Component } from '@angular/core';
import { NavController, NavParams, Alert } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment } from '@ionic-native/google-maps';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;
  constructor() { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    alert('entrou');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);


    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      alert('map ready');
    })
      .catch(error => {
        alert('error' + JSON.stringify(error));
      });
  }
  // let marker: Marker = this.map.addMarkerSync({
  //   title: 'Ionic',
  //   icon: 'blue',
  //   animation: 'DROP',
  //   position: {
  //     lat: 43.0741904,
  //     lng: -89.3809802
  //   }
  // });
}
