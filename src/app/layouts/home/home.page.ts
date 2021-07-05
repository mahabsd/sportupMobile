import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalShearePage } from '../modal-sheare/modal-sheare.page';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../shared/Service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  imgSrc =  "data:image/jpeg;base64,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"
  slideOpts = {
    loop: true,
    effect: 'slide',
    freeModeSticky: false,
    width: 55,
    spaceBetween: 25
  };
  constructor(private modalController: ModalController,
    private userservice: UserService) {
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalShearePage
    });
    return await modal.present();
  }
  ngOnInit() {
    this.getMe()
    const slideOpts = {
      slidesPerView: 3,
      coverflowEffect: {
        //autoplay: true,
        rotate: 45,
        stretch: 0,
        depth: 80,
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
    }
    let slides = document.querySelector('ion-slides');
    slides.options = slideOpts;
  }
  getMe() {
    this.userservice.getMe().subscribe(res => {
      console.log(res);

    })
  }
}
