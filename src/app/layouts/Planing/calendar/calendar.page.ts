import { CalendarComponent } from 'ionic2-calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';
import { CalendarService } from 'src/app/shared/Service/calendar.service';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  eventSource = [];
  viewTitle: string;
  user$: any;
  calendar = {
    mode: 'month',
    locale: 'en-GB',
    currentDate: new Date(),
  };

 

  selectedDate: Date;

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
    });
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalendarModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false,
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event && result.data.event.startTime) {
        const event = result.data.event;
        console.log(event);

        const dateFormatedStart = this.formateEventDates(event.startTime);
        const dateFormatedEnd = this.formateEventDates(event.endTime);
 
          event.startTime = new Date(
            Date.UTC(
              dateFormatedStart.getUTCFullYear(),
              dateFormatedStart.getUTCMonth(),
              dateFormatedStart.getUTCDate(),
            )
          );
          event.endTime = new Date(
            Date.UTC(
              dateFormatedEnd.getUTCFullYear(),
              dateFormatedEnd.getUTCMonth(),
              dateFormatedEnd.getUTCDate(),
            )
          );
      


      
        this.eventSource.push(event);
        this.calendarService
          .addActivity(event)
          .subscribe(async (res) => console.log(res));

        console.log(this.eventSource);

        this.myCal.loadEvents();
      }
    });
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
      message: 'Activité: ' +  event.notes ,
      buttons: ['OK'],
    });
    alert.present();
  }

  removeEvents() {
    this.eventSource = [];
  }
}
