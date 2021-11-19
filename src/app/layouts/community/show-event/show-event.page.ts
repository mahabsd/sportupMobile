import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { EventService } from 'src/app/shared/Service/event.service';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.page.html',
  styleUrls: ['./show-event.page.scss'],
})
export class ShowEventPage implements OnInit {
  interrested: boolean;
  isScrollTop: boolean;
  dropDown: boolean;
  constructor(public popoverController: PopoverController,
  private eventService: EventService) { }

  ngOnInit() {
    this.dropDown=false;
  }

  interest() {
    this.interrested = true;
  }

  notinterested() {
    this.interrested = false;
  }

  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;
    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }
  openDropDown() {
    if(this.dropDown===false){
      this.dropDown=true;
    }
    else if(this.dropDown===true){
      this.dropDown=false;
    }
  }
}
