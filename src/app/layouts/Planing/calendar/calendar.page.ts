import { CalendarComponent } from 'ionic2-calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';
import { EventmodalComponent } from '../eventmodal/eventmodal.component';
import { CalendarService } from 'src/app/shared/Service/calendar.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Moment } from 'moment';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  eventSource = [];
  eventDays = [];
  method: string;
  viewTitle: string;
  apiImg = environment.apiImg + 'User/';
  user$: any;
  calendar = {
    mode: 'month',
    locale: 'en-GB',
    currentDate: new Date(),
    autoSelect: false,
  };
  subscription: Subscription;
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private modalCtrl: ModalController,
    private calendarService: CalendarService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.method = 'post';
    this.getMe();

    this.subscription = this.calendarService.getEvent().subscribe((event) => {
      this.openCalModal(event);
      this.method = 'update';
      console.log(event);
      
    });
  }

  // Change current month/week/day
  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  getMe() {
    this.userService.getMe().subscribe(async (res) => {
      this.user$ = res.data.data;
      console.log(this.user$);

      this.loadEvents();
    });
  }

  loadEvents() {
    this.calendarService.getActivitiesbyID(this.user$._id).subscribe((res) => {
      this.eventSource = res;
      
      this.eventSource.forEach((event) => {
        event.startTime = this.formateEventDates(event.startTime);
        event.endTime = this.formateEventDates(event.endTime);
      });

      this.extractEventDays();
    });
  }
  getDayName(day, month, year) {
    const newDate = new Date(year, month, day);
   
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    return days[newDate.getDay()];
  }
  extractEventDays() {
    this.eventSource.forEach((event) => {
      this.eventDays.push(event.startTime.getDate());
    });
    this.eventDays = [...new Set(this.eventDays)].sort((a, b) => a - b);
  }
  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  async openDetailModal(evt) {
    const modal = await this.modalCtrl.create({
      component: EventmodalComponent,
      cssClass: 'cal-modal',
      backdropDismiss: false,
      componentProps: {
        eventSelected: evt
      },
    });
    await modal.present();
  }

  async openCalModal(sTime) {
    console.log(sTime);
    
    const modal = await this.modalCtrl.create({
      component: CalendarModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false,
      componentProps: {
        selectedTime: sTime,
        method: this.method,
  
      },
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event && result.data.event.startTime) {
        const event = result.data.event;

        const dateParsedStart: Date = moment(
          event.startTime,
          'YYYY-MM-DD'
        ).toDate();
        const dateFormtedStart = dateParsedStart;
        const dateFormatedEnd = this.formateEventDates(event.endTime);

        event.startTime = new Date(
          dateParsedStart.getFullYear(),
          dateFormtedStart.getMonth(),
          dateFormtedStart.getDate()
        );
        event.endTime = new Date(
          dateFormatedEnd.getFullYear(),
          dateFormatedEnd.getMonth(),
          dateFormatedEnd.getDate()
        );
 

        this.eventSource.push(event);

        if (this.method === 'post') {
          this.calendarService
            .addActivity(event)
            .subscribe(async (res) => console.log(res));
        } else if (this.method === 'update') {
          console.log( sTime);
          
          
        }

        this.extractEventDays();
        this.myCal.loadEvents();
      }
    });
  }

  onTimeSelected(ev) {
    // eslint-disable-next-line max-len
    //console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.openCalModal(ev.selectedTime);
  }

  formateEventDates(eventTime) {
    const dateFormatString = eventTime.split('-');
    const dateFormate = new Date(
      dateFormatString[0] +
        '-' +
        dateFormatString[1] +
        '-' +
        dateFormatString[2]
    );
    return dateFormate;
  }
  // Calendar event was clicked
  async onEventSelected(event) {
    const alert = await this.alertCtrl.create({
      header: event.activity,
      subHeader: event.lieu,
      // eslint-disable-next-line max-len
      message: 'Activité: ' + event.notes,
      buttons: ['OK'],
    });
    alert.present();
  }

  removeEvents() {
    this.eventSource = [];
  }
}
