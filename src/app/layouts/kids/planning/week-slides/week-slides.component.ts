import { Component, Input, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/shared/Service/calendar.service';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-week-slides',
  templateUrl: './week-slides.component.html',
  styleUrls: ['./week-slides.component.scss'],
})
export class WeekSlidesComponent implements OnInit {
  activities
  dates = {activity:{}, startDate: "", startDay: "", startMonth: "", startYear: "",endDate: "", endDay: "", endMonth: "", endYear: "" }
  eventsKids=[]
  months=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"]
  date=new Date()
  user$: any;
  constructor(private calendarService: CalendarService,private userService: UserService) { }

  ngOnInit() {
    this.getAllCalendarEvents()
  }
  getDayOfTheWeek(date) {
    date = new Date(date)
    return date.getDay();
  }
  getDayOfTheMonth(date) {
    date = new Date(date)
    return date.getDate();
  }
  getMonth(date) {
    date = new Date(date)
    return date.getMonth();
  }
  getYear(date) {
    date = new Date(date)
    return date.getFullYear();
  }

  getAllCalendarEvents() {
    this.userService.getMe().subscribe(async (res) => {
      this.user$ = res.data.data;
      this.calendarService.getActivitiesbyID(this.user$._id).subscribe(async res => {
        this.activities = await res
        this.activities.map(el => {
          this.dates={activity:{}, startDate: "", startDay: "", startMonth: "", startYear: "",endDate: "", endDay: "", endMonth: "", endYear: "" }
          this.dates.startDate = this.getDayOfTheWeek(el.startTime)
          this.dates.startDay = this.getDayOfTheMonth(el.startTime)
          this.dates.startMonth = this.getMonth(el.startTime)
          this.dates.startYear = this.getYear(el.startTime)
          this.dates.endDate = this.getDayOfTheWeek(el.endTime)
          this.dates.endDay = this.getDayOfTheMonth(el.endTime)
          this.dates.endMonth = this.getMonth(el.endTime)
          this.dates.endYear = this.getYear(el.endTime)
          this.dates.activity = el
          this.eventsKids=[...this.eventsKids,this.dates]
        })
      });

    });

  }
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
}
