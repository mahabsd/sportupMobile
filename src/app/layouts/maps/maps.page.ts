import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";
import { Platform } from "@ionic/angular";
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {


  constructor(public platform: Platform) { }
  ngAfterViewInit() {
    this.platform.ready().then(() => this.loadMap());
  }


  loadMap() {
    const map = GoogleMaps.create('map');
    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      const coordinates: LatLng = new LatLng(41, -87);
      map.setCameraTarget(coordinates);
      map.setCameraZoom(8);
    });
  }
  ngOnInit() {
  }

}
