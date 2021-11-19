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
  constructor(public popoverController: PopoverController,
  private eventService: EventService) { }

  ngOnInit() {
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

}
