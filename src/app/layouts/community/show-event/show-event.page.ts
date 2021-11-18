import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { EventService } from 'src/app/shared/Service/event.service';
import { ShowmorePage } from '../showmore/showmore.page';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.page.html',
  styleUrls: ['./show-event.page.scss'],
})
export class ShowEventPage implements OnInit {
  interrested;
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
  async openEventMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: ShowmorePage,
      cssClass: 'custClass',
      event: ev,
      translucent: true,
      mode: 'ios',
      componentProps: {
        paramID: ev,
      }
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
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
