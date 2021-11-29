import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private calendarService: CalendarService,
    private router: Router
  ) {}

  supprimerAdult() {
    this.calendarService.deleteEvent(this.eventSelected._id).subscribe((res) => {
      this.router.navigate(['/calendar']);
      this.modalCtrl.dismiss();
    });
  }
  supprimerKids() {
    this.calendarService.deleteEvent(this.eventSelected.activity._id).subscribe((res) => {
      this.router.navigate(['/planning-kids']);
      this.modalCtrl.dismiss();
    });

  }
  updateAdult() {
    this.calendarService.sendEvent(this.eventSelected);
    console.log(this.eventSelected);
  }
  updateKids() {
    this.calendarService.sendEvent(this.eventSelected);
    console.log(this.eventSelected.activity);
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    // console.log(this.eventSelected);
  }
}
