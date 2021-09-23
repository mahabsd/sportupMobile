import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  event = {
    activity: '',
    notes: '',
    lieu: '',
    startTime: null,
    endTime: '',
  };
  selectedEvent;
  selectedTime: Date;
  formatedTime: string;
  modalReady = false;
  user$: any;
  constructor(private modalCtrl: ModalController,
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }
  ngOnInit() {
    console.log(this.selectedEvent.method);
    this.method = this.selectedEvent.method;
    if(this.method==='update')
    {
      this.event.activity = this.selectedEvent.event.activity;
      this.event.notes = this.selectedEvent.event.notes;
      this.selectedTime = this.selectedEvent.event.startTime;
    }


    this.event.startTime = this.selectedEvent.event.startTime;
      
  
    this.formatedTime = this.event.startTime.toISOString();
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
