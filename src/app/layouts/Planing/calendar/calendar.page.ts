import { CalendarComponent } from 'ionic2-calendar';
import {
  Component,
  ViewChild,
  Renderer2,
  OnInit,
  Inject,
  LOCALE_ID,
  Input,
  ElementRef,
} from '@angular/core';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';
import { EventmodalComponent } from '../eventmodal/eventmodal.component';
import { CalendarService } from 'src/app/shared/Service/calendar.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Moment } from 'moment';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationsService } from 'src/app/shared/Service/notifications.service';
@Component({
  selector: 'app-home',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  @ViewChild('slides') slides: IonSlides;
  @Input() slider = false;
  eventSource = [];
  eventDays = [];
  selectedMonth;
  show = false;
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

  selectedYear: any;
  isParam: boolean;
  notif: any = { reciever: '', userOwner: '', text: '', event: '' };

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private modalCtrl: ModalController,
    private calendarService: CalendarService,
    private userService: UserService,
    private router: Router,
    private renderer: Renderer2,
    private elem: ElementRef,
    private notificationsService: NotificationsService
  ) {}


  ngAfterContentChecked()
  {
    let events = [];
    let elements = this.elem.nativeElement.querySelectorAll('td');
    for (var i = 0; i < elements.length; ++i) {
      if(elements[i].className==='monthview-primary-with-event')

      events.push(elements[i]);

    }

    events.forEach(element => {
      if(this.slider)
        this.renderer.addClass(element,'dark');
        else
        this.renderer.addClass(element,'light');
    });

    // console.log(events);
  }
  ngOnInit() {
    const url = this.router.url.split('/', 6);
    // console.log(url);


    if (url[1] === 'calendar') {
      this.slider = false;
    }
    if (url[1] === 'planning') {
      this.slider = true;
    }
    this.getMe();

    this.subscription = this.calendarService.getEvent().subscribe((event) => {
      this.openCalModal(null, event);
    });
  }

  sliedNext() {
    this.slides.slideNext();
  }

  slideBack() {
    this.slides.slidePrev();
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
      // console.log(this.user$);
      this.loadEvents();
    });
  }

  loadEvents() {
    this.calendarService.getActivitiesbyID(this.user$._id).subscribe((res) => {
      this.eventSource = res;
      // console.log(res);
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
    //Get event days by selected month

    // eslint-disable-next-line max-len
    this.eventDays = [
      ...new Set(
        this.eventSource
          .filter((event) => event.startTime.getMonth() === this.selectedMonth)
          .map((event) => event.startTime.getDate())
          .sort((a, b) => a - b)
      ),
    ];
    // console.log(this.eventDays);
  }
  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onCurrentDateChanged(event) {
    // console.log(event.getMonth());

    this.selectedMonth = event.getMonth();
    this.selectedYear = event.getYear();
    this.extractEventDays();
  }
  async openDetailModal(evt) {
    const modal = await this.modalCtrl.create({
      component: EventmodalComponent,
      cssClass: 'cal-modal',
      backdropDismiss: false,
      componentProps: {
        eventSelected: evt,
      },
    });
    await modal.present();

    modal.onDidDismiss().then((result) => {
      this.loadEvents();
    });
  }

  async openCalModal(sTime, evnt) {
    const modal = await this.modalCtrl.create({
      component: CalendarModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false,
      componentProps: {
        selectedTime: sTime,
        selectedEvent: evnt,
      },
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event && result.data.event.startTime) {
        const event = result.data.event;

        const dateParsedStart: Date = moment(
          event.startTime,
          'YYYY-MM-DD HH:mm'
        ).toDate();
        const dateParsedEnd: Date = moment(
          event.endTime,
          'YYYY-MM-DD HH:mm'
        ).toDate();

        event.startTime = dateParsedStart;

        event.endTime = dateParsedEnd;

        if (evnt === null) {
          this.calendarService.addActivity(event).subscribe(async (res) => {
            this.eventSource.push(res);
            this.loadEvents();
          });
          this.createNotif(event);
        } else {
          this.calendarService.updateEvent(event).subscribe((res) => {
            this.modalCtrl.dismiss();
            this.loadEvents();
          });
          }
        this.extractEventDays();
        this.myCal.loadEvents();
      }
    });
  }

  onTimeSelected(ev) {
    // eslint-disable-next-line max-len
    //console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.openCalModal(ev, null);
  }

  formateEventDates(eventTime) {
    // console.log(eventTime);

    const dateFormate: Date = moment(eventTime, 'YYYY-MM-DD HH:mm').toDate();
    return dateFormate;
  }
  // Calendar event was clicked
  async onEventSelected(event) {
    const alert = await this.alertCtrl.create({
      header: event.activity,
      subHeader: event.lieu,
      // eslint-disable-next-line max-len
      message: 'Activit??: ' + event.notes,
      buttons: ['OK'],
    });
    alert.present();
  }

  removeEvents() {
    this.eventSource = [];
  }

  createNotif(event){
    this.notif.userOwner = this.user$._id;
    this.notif.reciever = this.user$._id;
    this.notif.text = 'a cr???? un ??v??nnement';
    this.notif.event = event._id;
    this.notificationsService.postNotification(this.notif).subscribe();
  }
}
