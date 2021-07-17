import { Component, OnInit , Inject, LOCALE_ID, ViewChild} from '@angular/core';
import * as moment from 'moment';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  showAddEvent: any;
  eventSource = [];
  User: any;
  newEvent = {
    title: 'jujutsu',
    description: 'sience entrainement',
    startTime: '07 2021 11:00:00',
    endTime: '07 2021 12:00:00'
  };
  viewTitle: string;
  selectedDay = new Date();
  selectedDate: Date;

  calendar = {
    mode: 'month',
    locale:  'en-GB',
    currentDate: new Date()
  };
  @ViewChild(CalendarModalPage) myCal: CalendarComponent;
  constructor(
  private alertCtrl: AlertController,
  @Inject(LOCALE_ID) private locale: string,
  private modalCtrl: ModalController,
  ) { }
  next=()=> {
    this.myCal.slideNext();
  }
  back=()=> {
    this.myCal.slidePrev();
  }
  onViewTitleChanged(event) {
    this.viewTitle = event;

  }

  onEventSelected = (event) => {
    console.log('hhhhhhhh')
    console.log( event);
    const start = formatDate(event.startTime, 'medium', this.locale);
    const end = formatDate(event.endTime, 'medium', this.locale);
    console.log( start.toString());
    console.log(end.toString());
  }

  onTimeSelected(ev) {
    const selected = new Date(ev.selectedTime);
    console.log(selected);
  }
  onCurrentDateChanged(event: Date) {
    console.log(event);
  }

  ngOnInit() {}
  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      title: '',
      description: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }
  addEvent() {
    this.eventSource.push({
      title: this.newEvent.title,
      startTime:  new Date(this.newEvent.startTime),
      endTime: new Date(this.newEvent.endTime),
      description: this.newEvent.description,
    });
    this.showHideForm();
  }

  showPromptAlert() {

  }
  removeEvents() {
    this.eventSource = [];
  }
  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalendarModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
    await modal.present();
    modal.onDidDismiss().then((result) => {
      console.log('ggggggg', result.data);
      var events = [];
      let Start = result.data.event.startTime
      let newDate = new Date(Start);
      let End = result.data.event.endTime 
      let newDate1 = new Date(End);
      events.push({
        title: 'Event - ' ,
        startTime:new Date(
          newDate.getFullYear(),
          newDate.getMonth(),
          newDate.getDate()
              ),
        endTime: new Date(
          newDate1.getFullYear(),
          newDate1.getMonth(),
          newDate1.getDate()
              ),
        allDay: false,
      });
      console.log(events)
      this.eventSource = events;
    });
  }
}
