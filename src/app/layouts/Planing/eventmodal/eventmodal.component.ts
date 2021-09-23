import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { CalendarService } from 'src/app/shared/Service/calendar.service';

@Component({
  selector: 'app-eventmodal',
  templateUrl: './eventmodal.component.html',
  styleUrls: ['./eventmodal.component.scss'],
})
export class EventmodalComponent implements OnInit {
  eventSelected;
  constructor(
    private modalCtrl: ModalController,
    private calendarService: CalendarService
  ) {}

  supprimer() {
    this.calendarService.deleteEvent(this.eventSelected._id).subscribe((res) => {
      console.log(res);
      this.modalCtrl.dismiss();
    });
  }
  update() {
 

    this.calendarService.sendEvent(this.eventSelected);
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
 
  ngOnInit() {}
}
