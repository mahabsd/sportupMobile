import { CalendarComponent } from 'ionic2-calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';
import { CalendarService } from 'src/app/shared/Service/calendar.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Moment } from 'moment';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  eventSource = [];
  eventDays = [];
  viewTitle: string;
  apiImg = environment.apiImg + 'User/';
  user$: any;
  calendar = {
    mode: 'month',
    locale: 'en-GB',
    currentDate: new Date(),
    autoSelect: false,
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private modalCtrl: ModalController,
    private calendarService: CalendarService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getMe();
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
      console.log(res);
      this.eventSource.forEach((event) => {
        event.startTime = this.formateEventDates(event.startTime);
        event.endTime = this.formateEventDates(event.endTime);
      });

      this.extractEventDays();
    });
  }
  getDayName(day, month, year) {
    const newDate = new Date(year,month,day);
    console.log(day);
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    return days[newDate.getDay()];
  }
  extractEventDays() {
    this.eventSource.forEach((event) => {
      this.eventDays.push(event.startTime.getDate());
    });
    this.eventDays = [...new Set(this.eventDays)].sort((a,b) => a - b);
  }
  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  async openCalModal(time) {
    const modal = await this.modalCtrl.create({
      component: CalendarModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false,
      componentProps: {
        selectedTime: time,
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

        console.log(event.startTime);

        this.eventSource.push(event);
        this.calendarService
          .addActivity(event)
          .subscribe(async (res) => console.log(res));

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
