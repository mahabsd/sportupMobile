import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { EventService } from 'src/app/shared/Service/event.service';
import { PageService } from 'src/app/shared/Service/page.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { async } from '@angular/core/testing';
import { CalendarService } from 'src/app/shared/Service/calendar.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  isScrollTop = false;

  dropDown: boolean;
  selected: any;

  events = [
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day: "Mardi"
    },
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day: "Mardi"
    },
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day: "Mardi"
    },
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day: "Mardi"
    },
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day: "Mardi"
    },
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day: "Mardi"
    }

  ]

  slideOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
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
  };
  user: any;
  personalEvents = [];
  myPages: any;
  allPages: any;
  constructor(private eventService: EventService,
    public pageService: PageService,
    public userService: UserService,
    public calendarService: CalendarService,
    private elemRef: ElementRef) { }
    @HostListener('click', ['$event.target'])
    onClickOutside(targetElement) {
      const target = this.elemRef.nativeElement.querySelector('div');
      if (targetElement.tagName === target.tagName) {
        this.dropDown= false;
      }
    }
  segmentChanged(ev: any) {
    this.selected = ev.detail.value;
  }
  ngOnInit() {
    this.selected = 'Pages';
    this.dropDown = false;
    this.getPersonalPages();
    this.getPersonalEvents();
    this.getAllPages()
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  doRefresh(event) {
    // this.posts = [];
    setTimeout(() => {
      // this.getAllPostsByEvent();
      event.target.complete();
    }, 1000);
  }
  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;

    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }

  openDropDown() {
    if (this.dropDown === false) {
      this.dropDown = true;
    }
    else if (this.dropDown === true) {
      this.dropDown = false;
    }
  }


  getPersonalPages() {
    this.userService.getMe().subscribe(async res => {
      this.user = await res.data.data;
      this.pageService.getpagesbyID(this.user._id).subscribe( arg =>  this.myPages = arg);
    });
  }
  getAllPages() {
    this.pageService.getAllPages().subscribe(async (res:any) => this.allPages = await res.data.data);
  }
  getPersonalEvents() {
    this.userService.getMe().subscribe(async res => {
      this.user = await res.data.data;
      this.calendarService.getAllEvents().subscribe(events => {
        this.personalEvents = events.filter(event => event.type === 'event');
      });
    });
  }

}
