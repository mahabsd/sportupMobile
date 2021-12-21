import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Activity } from 'src/app/shared/Model/Activity';
import { CalendarService } from 'src/app/shared/Service/calendar.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Page } from '../../../shared/Model/page';
import { PageService } from '../../../shared/Service/page.service';
declare var google: any;
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  evennement: any = false;
  selected: any;
  dropDown = false;
  private: boolean;
  public: boolean;
  page: Page = new Page();
  user: any;
  event: Activity = new Activity();
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  map: any;
  lat: any;
  lng: any;
  eventPageLat: any;
  eventPageLng: any;
  markers = [];
  showMap: boolean;
  constructor(private pageService: PageService,
    private userService: UserService,
    private calendarService: CalendarService) { }

  ngOnInit() {
    this.private = false;
    this.public = true;
    this.selected = 'Page';
    this.getMe();
    this.showMap=false
  }

  openDropDown() {
    if (this.dropDown === false) {
      this.dropDown = true;
    }
    else if (this.dropDown === true) {
      this.dropDown = false;
    }
  }


  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.selected = ev.detail.value;
    this.toggleMap()
    this.lat === ""
    this.lng=== ""
    console.log(this.showMap);
  }
  createPage(page) {
    this.page.lattitude = this.eventPageLat
    this.page.langitude=this.eventPageLng
    this.page.createdBy = this.user._id
      this.pageService.addPage(page).subscribe(res => console.log(res));
  }
  getMe() {
    this.userService.getMe().subscribe(res => {
      this.user = res.data.data;
    });
  }
  createEvent(event) {
    this.event.lattitude = this.eventPageLat
    this.event.langitude=this.eventPageLng
    this.event.type = 'event';
    this.calendarService.addActivity(event).subscribe(async (res) => {
      console.log(res);});
  }

  tryGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude
      this.lng = position.coords.longitude
      this.initMap()
    });
  }

  toggleMap() {
    this.showMap = !this.showMap
    if (this.showMap === true) {
      this.tryGeolocation()
    }
  }


  initMap(): void {
    this.markers = []
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        mapId: "59300b885073112e",
        center: { lat: this.lat, lng: this.lng },
        zoom: 8,
      }
    );

    this.map.addListener("click", (mapsMouseEvent) => {
        this.hideMarkers()
        this.markers=[]
        // console.log(this.distantMarkers)
        this.eventPageLat = mapsMouseEvent.latLng.toJSON().lat
        this.eventPageLng = mapsMouseEvent.latLng.toJSON().lng
        let marker = new google.maps.Marker({
        position: { lat: this.eventPageLat, lng: this.eventPageLng },
        map: this.map,
        })
      console.log(this.eventPageLng)
      console.log(this.eventPageLat)
      this.markers.push(marker)

  })
  }
  setMapOnAll(map: google.maps.Map | null) {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

   hideMarkers(): void {
    this.setMapOnAll(null);
  }

   showMarkers(): void {
    this.setMapOnAll(this.map);
  }
}
