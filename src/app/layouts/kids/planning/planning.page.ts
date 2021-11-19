import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { CalendarService } from 'src/app/shared/Service/calendar.service';
import { CalendarModalPage } from '../../Planing/calendar-modal/calendar-modal.page';
import * as moment from 'moment';
import { NotificationsService } from 'src/app/shared/Service/notifications.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  events = [
    {
      day: "Lundi",
      date: "5",
      month: "Mars",
      year: "2021",
      events: [
        {
          from: 8,
          to: 9,
          text: "cours de français"
        },
        {
          from: 10,
          to: 11,
          text: "dance kids"
        },
        {
          from: 12,
          to: 14,
          text: "eat lunch"
        }
      ]
    },
    {
      day: "Mardi",
      date: "6",
      month: "Janvier",
      year: "2021",
      events: [
        {
          from: 8,
          to: 9,
          text: "cours de français"
        },
        {
          from: 10,
          to: 11,
          text: "dance kids"
        },
        {
          from: 12,
          to: 14,
          text: "eat lunch"
        }
      ]
    },
    {
      day: "Mercredi",
      date: "7",
      month: "Février",
      year: "2021",
      events: [
        {
          from: 8,
          to: 9,
          text: "cours de français"
        },
        {
          from: 10,
          to: 11,
          text: "dance kids"
        },
        {
          from: 12,
          to: 14,
          text: "eat lunch"
        }
      ]
    },
    {
      day: "Jeudi",
      date: "8",
      month: "Mai",
      year: "2021",
      events: [
        {
          from: 8,
          to: 9,
          text: "cours de français"
        },
        {
          from: 10,
          to: 11,
          text: "dance kids"
        },
        {
          from: 12,
          to: 14,
          text: "eat lunch"
        }
      ]
    },
    {
      day: "Vendredi",
      date: "9",
      month: "Juin",
      year: "2021",
      events: [
        {
          from: 8,
          to: 9,
          text: "cours de français"
        },
        {
          from: 10,
          to: 11,
          text: "dance kids"
        },
        {
          from: 12,
          to: 14,
          text: "eat lunch"
        }
      ]
    },
    {
      day: "Samedi",
      date: "10",
      month: "Juillet",
      year: "2021",
      events: [
        {
          from: 8,
          to: 9,
          text: "cours de français"
        },
        {
          from: 10,
          to: 11,
          text: "dance kids"
        },
        {
          from: 12,
          to: 14,
          text: "eat lunch"
        }
      ]
    },
    {
      day: "Dimanche",
      date: "11",
      month: "Aout",
      year: "2021",
      events: [
        {
          from: 8,
          to: 9,
          text: "cours de français"
        },
        {
          from: 10,
          to: 11,
          text: "dance kids"
        },
        {
          from: 12,
          to: 14,
          text: "eat lunch"
        }
      ]
    }
  ];
  months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
    "Septembre", "Octobre", "Novembre", "Décembre"];
  eventSource = [];
  notif: any;
  eventDays: any[];
  selectedMonth: any;
  user$: any;
  activities: import("/Users/sportup/Desktop/sportupMobile-maha/sportupMobile/src/app/shared/Model/Activity").Activity[];

  constructor(private modalCtrl: ModalController,
    private calendarService: CalendarService,
    private notificationsService: NotificationsService,
    private alertCtrl: AlertController,
    private userService: UserService) { }
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  slideOptsTwo = {
    initialSlide: this.events.length - 1,
    spaceBetween: -50,
    slidesPerView: 3,
    centeredSlides: false,
    loop: true,
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(
          `${swiper.params.containerModifierClass}coverflow`
        );
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth,
          height: swiperHeight,
          slides,
          $wrapperEl,
          slidesSizesGrid,
          $,
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal
          ? -transform$$1 + swiperWidth / 2
          : -transform$$1 + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier =
            ((center - slideOffset - slideSize / 2) / slideSize) *
            params.modifier;

          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);

          let translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
          let translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;

          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;

          const slideTransform = `translate3d(${translateX}px,${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex =
            -Math.abs(Math.round(offsetMultiplier));
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal
              ? $slideEl.find('.swiper-slide-shadow-left')
              : $slideEl.find('.swiper-slide-shadow-top');
            let $shadowAfterEl = isHorizontal
              ? $slideEl.find('.swiper-slide-shadow-right')
              : $slideEl.find('.swiper-slide-shadow-bottom');
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = swiper.$(
                `<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'
                }"></div>`
              );
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = swiper.$(
                `<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'
                }"></div>`
              );
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length)
              $shadowBeforeEl[0].style.opacity =
                offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length)
              $shadowAfterEl[0].style.opacity =
                -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }

        // Set correct perspective for IE10
        if (
          swiper.support.pointerEvents ||
          swiper.support.prefixedPointerEvents
        ) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },

    },
  };

  slideOptsOne = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      beforeInit() {
        const swiper = this;

        swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate() {
        const swiper = this;
        const {
          width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform$$1 = swiper.translate;
        const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);

          let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
          let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;

          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
              $slideEl.append($shadowBeforeEl);
            }
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
              $slideEl.append($shadowAfterEl);
            }
            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
          }
        }

        // Set correct perspective for IE10
        if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
          const ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = `${center}px 50%`;
        }
      },
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
      }
    }
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  ngOnInit() {
    this.getMe();
    this.getAllCalendarEvents();
  }
  getMe() {
    this.userService.getMe().subscribe(async (res) => {
      this.user$ = res.data.data;
      // console.log(this.user$);
      this.loadEvents();
    });
  }
  open() {
    console.log('heyyy');
  }
  async openCalModal(sTime, evnt) {
    console.log('hey');
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
      message: 'Activité: ' + event.notes,
      buttons: ['OK'],
    });
    alert.present();
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
  }
  createNotif(event) {
    this.getMe();
    this.notif.userOwner = this.user$._id;
    this.notif.reciever = this.user$._id;
    this.notif.text = 'a créé un événnement';
    this.notif.event = event._id;
    this.notificationsService.postNotification(this.notif).subscribe(res => console.log(res));
  }
  getAllCalendarEvents() {
    this.userService.getMe().subscribe(async (res) => {
      this.user$ = res.data.data;
      this.calendarService.getActivitiesbyID(this.user$._id).subscribe(res => this.activities = res);
    });
  }
}
