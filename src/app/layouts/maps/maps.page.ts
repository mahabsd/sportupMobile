import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/Shared/Service/user.service';
import MarkerClusterer from '@googlemaps/markerclustererplus';
import { environment } from 'src/environments/environment';

declare var google: any;
// declare var MarkerClusterer: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  map: any;
  GoogleAutocomplete = new google.maps.places.AutocompleteService();
  autocomplete = { input: '' };
  autocompleteItems = [];
  geocoder = new google.maps.Geocoder;
  markers = [];
  distantMarkers = [];
  lat: any;
  lng: any;
  user

  apiImgUser = `${environment.apiImg}User/`;
  travelMode='WALKING'
  startAddress: any;
  endAddress: any;
  dist:string;
  time: string;
  routeColor='blue'
  picks = [
    {
      type: "event",
      name: "Zumba Beach",
      startDate: "23/08/2021",
      endDate: "23/08/2021",
      startHour: "18:00",
      endHour: "23:00",
      participants: 300,
      lat:36.887473,
      lng: 10.330088,
      url:"https://icon-library.com/images/zumba-icon/zumba-icon-8.jpg"
    },
    {
      type: "entreprise",
      name: "Sport'Up",
      lat:36.888585,
      lng: 10.320889,
      url:"https://fr.seaicons.com/wp-content/uploads/2015/06/companies-icon.png"
    },
    {
      type: "commerce local",
      name: "Café",
      lat:36.889463,
      lng: 10.322127,
      url:"https://cdn.imgbin.com/10/15/2/city-icon-coffee-shop-icon-cafe-icon-FfiVAU8U.jpg"
    },
    {
      type: "Organisme",
      name: "BH bank",
      lat:36.888842,
      lng: 10.322130,
      url:"https://upload.wikimedia.org/wikipedia/commons/6/6d/BH_BANK.png"
    },
    {
      type: "institution",
      name: "Lycée pilote",
      lat:36.888974,
      lng: 10.321389,
      url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Round_Landmark_School_Icon_-_Transparent.svg/1024px-Round_Landmark_School_Icon_-_Transparent.svg.png"
    },
    {
      type: "association",
      name: "croissant rouge",
      lat:36.888561,
      lng: 10.321891,
      url:"https://img2.freepng.fr/20180609/gcb/kisspng-malaysian-red-crescent-society-logo-international-andrea-harsell-luna-roja-5b1c1f41da23a6.4158441115285696658935.jpg"
    },
  ];
  imagePath = "../../assets/icon/m/m";
  //https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m

  constructor(private zone: NgZone,private userService: UserService) {}

  ngOnInit() {
    this.getUser()
  }
  setWalking() {
    this.routeColor='blue'
    this.travelMode = 'WALKING'
    this.makeRoute()
  }
  setDriving() {
    this.routeColor='green'
    this.travelMode = 'DRIVING'
    this.makeRoute()
  }
  getDistTime(dist,time,start,end){
    this.dist = dist
    this.time = time
    this.startAddress = start
    this.endAddress=end
  }

  makeRoute() {
      let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: this.routeColor
      }, suppressMarkers: true
      });
      directionsRenderer.setMap(this.map); // Existing map object displays directions
// Create route from existing points used for markers
const start = {lat: this.distantMarkers[0].position.toJSON().lat, lng: this.distantMarkers[0].position.toJSON().lng};
const finish = {lat: this.distantMarkers[1].position.toJSON().lat, lng: this.distantMarkers[1].position.toJSON().lng};
const route = {
    origin: start,
    destination: finish,
    travelMode: this.travelMode
}

directionsService.route(route, (response,status)=> {
  if (status == 'OK') {
    var dist = response.routes[0].legs[0].distance.text
    var time = response.routes[0].legs[0].duration.text
    var start = response.routes[0].legs[0].start_address
    var end = response.routes[0].legs[0].end_address

    directionsRenderer.setDirections(response); // Add route to the map
    var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
    console.log(response)
    this.getDistTime(dist,time,start,end)
    }else {
      window.alert('Directions request failed due to ' + status);
    }
  });
  }
  getUser() {
    this.userService.getMe().subscribe(res => {
      // console.log(res.data.data);
      this.user = res.data.data
      this.tryGeolocation()
    })

  }

  tryGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude
      this.lng = position.coords.longitude
      this.initMap()
    });

  }


  initMap(): void {
    this.markers = []
    this.distantMarkers=[]
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        mapId: "59300b885073112e",
        center: { lat: this.lat, lng: this.lng },
        zoom: 8,
      }
    );
    //routerLink="/menu/tabs/layouts/coachprofile/{{ post.user.id || post.post.user.id }}/me"
    const contentString =
    `<a style="display:flex;flex-direction:column;align-items:center;text-decoration: none;color:green" href="/menu/tabs/layouts/coachprofile/${this.user.id}/me">
      <ion-avatar slot="" class="ion-padding" >
        <img src="${this.apiImgUser + this.user?.photo}"/>
      </ion-avatar>
      <span style="font-size:15px;font-weight:bold;text-transform:capitalize">${this.user.name}</span>
    </a>`

  const infoWindow = new google.maps.InfoWindow({
    content: contentString,
  })

    let marker = new google.maps.Marker({
      position: { lat: this.lat, lng: this.lng },
      map: this.map,
      title: 'I am here!',
      label:this.user.name.charAt(0).toUpperCase() +this.user.name.slice(1),
      icon: {
        url: this.apiImgUser + this.user?.photo,
        size: new google.maps.Size(54,54),
        scaledSize: new google.maps.Size(54, 54),
        labelOrigin: new google.maps.Point(28, 70),
        optimized:false
      },
      animation: google.maps.Animation.DROP,
    })
    var styles= [
      MarkerClusterer.withDefaultStyle(
        {
          height: 25,
          url: "../../assets/icon/m/m1.png",
          width: 25,
          textColor: `black`,
          anchorText: [0, 0]
        }
      )
    ]
    var mcOptions = {
      styles: styles
    }

    //get location from click on map


    this.map.addListener("click", (mapsMouseEvent) => {

        // console.log(this.distantMarkers)
        let lat = mapsMouseEvent.latLng.toJSON().lat
        let lng = mapsMouseEvent.latLng.toJSON().lng
        let marker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: this.map,
      })
      this.distantMarkers.push(marker)
      if (this.distantMarkers.length === 2) { this.makeRoute() }
  })
    for (let i = 0; i < this.picks.length; i++){
      let marker = new google.maps.Marker({
        position: { lat: this.picks[i].lat, lng: this.picks[i].lng },
        map: this.map,
        title: this.picks[i].name,
        label:this.picks[i].name,
        icon: {
          url: this.picks[i].url,
          size: new google.maps.Size(62,62),
          scaledSize: new google.maps.Size(62, 62),
          labelOrigin: new google.maps.Point(30, 70)
        },
        animation: google.maps.Animation.DROP,
      })
      this.markers.push(marker)
    }
    const MC = new MarkerClusterer(this.map, this.markers, mcOptions)


      marker.addListener('click', function () {
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude+0.0012
          let lng = position.coords.longitude-0.0001
          infoWindow.setPosition(new google.maps.LatLng({lat,lng}));
          infoWindow.open(this.map);
        });
    });
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
    this.markers = []
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
}



