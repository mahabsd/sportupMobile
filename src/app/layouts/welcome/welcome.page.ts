import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  hobbies = [
    {
      hobby: "musique",
      imgsrc:"https://img-31.ccm2.net/c-fOFxKL2gpFLrvmUMaelAQ8-2s=/1240x/smart/6b4bda32f7cd415389f230ae90788b89/ccmcms-hugo/10786591.jpg"
    },
    {
      hobby: "échec",
      imgsrc:"https://cdn.hswstatic.com/gif/chess-4.jpg"
    },
    {
      hobby: "dance",
      imgsrc:"https://i.pinimg.com/originals/a0/d8/77/a0d87759567c9be76ccad09c236c69b8.jpg"
    },
    {
      hobby: "cinéma",
      imgsrc:"https://www.liberte-scolaire.com/wp-content/uploads/2020/05/cine.jpg"
    },
    {
      hobby: "théatre",
      imgsrc:"https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/media/images/Blog/performing-arts-digital-arts/Theatre.jpg"
    },
    {
      hobby: "Jeux vidéo",
      imgsrc:"https://signal.avg.com/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/9%20Ways%20to%20Boost%20Your%20Gaming%20Rig/How_to_Improve_Your_Gaming_PC_Performance-Hero.jpg"
    },
    {
      hobby: "jardinage",
      imgsrc:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/garden-tools-1614175655.jpg?crop=1.00xw:0.752xh;0,0.190xh&resize=1200:*"
    },
    {
      hobby: "cuisine",
      imgsrc:"https://thumbor.thedailymeal.com/oL2MUxzomsgp0IsEQwUxBwth1ZI=//https://www.thedailymeal.com/sites/default/files/2021/08/20/Basic-Cooking-Methods.jpg"
    },
    {
      hobby: "dessin",
      imgsrc:"https://images.unsplash.com/photo-1525254646234-87ffe274c810?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      hobby: "peinture",
      imgsrc:"https://previews.123rf.com/images/ljupco/ljupco1605/ljupco160500060/56183560-elderly-man-drawing-on-a-canvas-with-a-paintbrush-at-home.jpg"
    },
    {
      hobby: "shopping",
      imgsrc:"https://www.globalblue.com/business/images/article926851.ece/BINARY/TFS_Article_2019_970x643.jpg"
    },
    {
      hobby: "jeux de socièté",
      imgsrc:"https://cdn.mos.cms.futurecdn.net/zJuMeMhHSJ943B4W3W5BgH.jpg"
    },
    {
      hobby: "lecture",
      imgsrc:"https://thekaurmethod.com/wp-content/uploads/2021/01/98b79a4e-fefb-11e8-aebf-99e208d3e521.jpg"
    },
    {
      hobby: "broderie",
      imgsrc:"https://cache.marieclaire.fr/data/photo/w600_h315_c17/5v/techniques-broderie.jpg"
    },
    {
      hobby: "couture",
      imgsrc:"https://lisafalconer.files.wordpress.com/2020/11/1200x628-featured-image-on-wordpress.png"
    },
    {
      hobby: "amigurimis",
      imgsrc:"https://img.static-rmg.be/a/view/q75/w686/h/2372763/amigurumi-renard-png.png"
    },
    {
      hobby: "création de bijoux",
      imgsrc:"https://www.activites-educatives.fr/wp-content/uploads/2020/04/Atelier-BIJOUX.jpg"
    },
    {
      hobby: "décoration",
      imgsrc:"https://www.cocondedecoration.com/blog/wp-content/uploads/2020/10/idee-decoration-style-arty-salon-732x425.jpg"
    },
    {
      hobby: "tissage",
      imgsrc:"https://www.icem-pedagogie-freinet.org/sites/default/files/images/creations_114_metier_tissage_01.jpg"
    },
    {
      hobby: "origami",
      imgsrc:"https://img-31.ccm2.net/Fh_dGV2WjihtCVrKcr-LXwL3T4Y=/910x/smart/5953dd00ba644e45b6095ae307bc8c43/ccmcms-hugo/25308911.jpg"
    },
    {
      hobby: "sculpture d'argile",
      imgsrc:"https://georgetownvoice.com/wp-content/uploads/2020/03/pottery.jpg"
    },
    {
      hobby: "sculpture de bois",
      imgsrc:"https://isfahaninfo.com/wp-content/uploads/2019/03/Header-wood-carving-IsfahanInfo1.jpg"
    },
    {
      hobby: "sculpture",
      imgsrc:"https://images.squarespace-cdn.com/content/v1/5351657ae4b086059ff7e88c/1552577545408-B0HFIWIE0MGMH8LFOP5T/IMG_2027.jpg"
    },
    {
      hobby: "artisanat de béton",
      imgsrc:"https://www.artmajeur.com/medias/standard/m/a/mariem-maloche/artwork/11800319_20181210-165542.jpg"
    },
    {
      hobby: "photographie",
      imgsrc:"https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865.jpg"
    }
  ];
  hob: any = [];
  howMany

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

  constructor() { }

  ngOnInit() {
    this.cutting()
  }

  cutting() {
    this.howMany =Math.ceil(this.hobbies.length / 4)
    for (let i = 0; i < this.howMany; i++){
      this.hob.push({fourHobs:this.hobbies.splice(0,4)})
    }
    console.log(this.hob);
  }

}
