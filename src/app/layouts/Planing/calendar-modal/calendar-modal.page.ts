import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { Activity } from 'src/app/shared/Model/Activity';
import { User } from 'src/app/Shared/Model/User';
import { CalendarService } from 'src/app/shared/Service/calendar.service';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.page.html',
  styleUrls: ['./calendar-modal.page.scss'],
})
export class CalendarModalPage implements OnInit {
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  viewTitle: string;
  activity: Activity = new Activity();
  method;
  today: Date;
  event: Activity = new Activity();
  selectedEvent;
  selectedTime: any;
  formatedTime: string;
  modalReady = false;
  user$: any;
  constructor(private modalCtrl: ModalController) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }
  ngOnInit() {
    console.log(this.selectedEvent.method);
    this.method = this.selectedEvent.method;
    if (this.method === 'update') {
      this.event.activity = this.selectedEvent.event.activity;
      this.event.lieu = this.selectedEvent.event.lieu;
      this.event.notes = this.selectedEvent.event.notes;
      this.selectedTime = this.selectedEvent.event.startTime;

      // eslint-disable-next-line max-len
      const fStart = new Date(
        Date.UTC(
          this.selectedEvent.event.startTime.getUTCFullYear(),
          this.selectedEvent.event.startTime.getUTCMonth(),
          this.selectedEvent.event.startTime.getDate(),
          this.selectedEvent.event.startTime.getUTCHours() + 1,
          this.selectedEvent.event.startTime.getUTCMinutes()
        )
      );
      // eslint-disable-next-line max-len
      const fEnd = new Date(
        Date.UTC(
          this.selectedEvent.event.endTime.getUTCFullYear(),
          this.selectedEvent.event.endTime.getUTCMonth(),
          this.selectedEvent.event.endTime.getDate(),
          this.selectedEvent.event.endTime.getUTCHours() + 1,
          this.selectedEvent.event.endTime.getUTCMinutes()
        )
      );

      this.event.startTime = moment(fStart).format('YYYY/MM/DD HH:mm');
      this.event.endTime = moment(fEnd).format('YYYY/MM/DD HH:mm');
    } else {
      // eslint-disable-next-line max-len
      const fStart = new Date(
        Date.UTC(
          this.selectedTime.selectedTime.getUTCFullYear(),
          this.selectedTime.selectedTime.getUTCMonth(),
          this.selectedTime.selectedTime.getDate(),
          this.selectedTime.selectedTime.getUTCHours() + 1,
          this.selectedTime.selectedTime.getUTCMinutes()
        )
      );
      // eslint-disable-next-line max-len
      const fEnd = new Date(
        Date.UTC(
          this.selectedTime.selectedTime.getUTCFullYear(),
          this.selectedTime.selectedTime.getUTCMonth(),
          this.selectedTime.selectedTime.getDate(),
          this.selectedTime.selectedTime.getUTCHours() + 1,
          this.selectedTime.selectedTime.getUTCMinutes()
        )
      );

      // this.formatedTime = this.event.startTime.toISOString();
      this.event.startTime = moment(fStart).format('YYYY/MM/DD HH:mm');
      this.event.endTime = moment(fEnd).format('YYYY/MM/DD HH:mm');
      console.log(this.selectedTime.selectedTime);
    }
    this.event.startTime = this.selectedEvent.event.startTime;
    this.formatedTime = this.event.startTime.toString();
    console.log(this.formatedTime);
    this.event.startTime = this.formatedTime;
  }

  save() {
    this.modalCtrl.dismiss({ event: this.event });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
