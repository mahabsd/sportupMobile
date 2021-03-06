import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { EventService } from 'src/app/shared/Service/event.service';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { PageService } from 'src/app/shared/Service/page.service';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.scss'],
})
export class ShowpageComponent implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  @Input() page: any;
  selected: any;
  isScrollTop = false;
  dropDown: boolean;
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

          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)
           rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

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
  friends: any;
  userid: any;
  selectedFriends: any;

  constructor(private eventService: EventService,
    public pageService: PageService,
    public userService: UserService,
    private followerService: FollowerService,
    private elemRef: ElementRef,
    private userservice: UserService) { }
    @HostListener('click', ['$event.target'])
    onClickOutside(targetElement) {
      const target = this.elemRef.nativeElement.querySelector('div');
      if (targetElement.tagName === target.tagName) {
        this.dropDown = false;
      }
    }
  ngOnInit() {
    this.selectedFriends = '';
    this.dropDown = false;
    this.getMe();
  }
  segmentChanged(ev: any) {
    this.selected = ev.detail.value;
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
  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.userid = res.data.data._id;
    });
  }
  getAllfriends() {
    this.followerService.getFollowers(this.userid)
      .subscribe(res => {
        this.friends = res.data.data;
      });
  }
  submitInvitations(){
    console.log(this.selectedFriends);

  }
}
