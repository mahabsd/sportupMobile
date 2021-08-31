import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map: any;
  GoogleAutocomplete = new google.maps.places.AutocompleteService();
  autocomplete = { input: '' };
  autocompleteItems = [];
  geocoder = new google.maps.Geocoder;
  markers = [];
  museumData = [];
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  constructor(private zone: NgZone) {
    fetch("../../assets/data/musuem.json").then(res => res.json()).then(json => {
      this.museumData = json.museums;
    });
  }
  ngOnInit() { }

  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(36.8790882, 10.327678);
    const options = {
      center: location,
      zoom: 12,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }

  tryGeolocation() {
    this.clearMarkers();
    navigator.geolocation.getCurrentPosition((position) => {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // console.log(position.coords.latitude,position.coords.longitude)
      let marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: 'I am here!'
      });
      this.markers.push(marker);
      this.map.setCenter(pos);
    });
  }

  clearMarkers() {
    this.markers = [];
  }

  updateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
  }

  selectSearchResult(item) {
    this.clearMarkers();
    this.autocompleteItems = [];
    this.geocoder.geocode({ 'placeId': item.place_id }, (results, status) => {
      if (status === 'OK' && results[0]) {
        let position = {
          lat: results[0].geometry.location.lat,
          lng: results[0].geometry.location.lng
        };
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
        });
        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
      }
    })
  }

  addMarkers() {
    // tslint:disable-next-line:variable-name
    for (let _i = 0; _i < this.museumData.length; _i++) {
      if (_i > 0) {
        this.addMarkersToMap(this.museumData[_i]);
      }
    }
  }

  addMarkersToMap(museum) {
    const position = new google.maps.LatLng(museum.latitude, museum.longitude);
    const museumMarker = new google.maps.Marker({ position, title: museum.name });
    museumMarker.setMap(this.map);
  }

}



