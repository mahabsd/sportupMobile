import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { EventService } from 'src/app/shared/Service/event.service';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { HobbiesService } from 'src/app/shared/Service/hobbies.service';
import { Follow } from 'src/app/shared/Model/Follow';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Router } from '@angular/router';
import { UserHobby } from 'src/app/shared/Model/userHobby';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.page.html',
  styleUrls: ['./hobbies.page.scss'],
})
export class HobbiesPage implements OnInit {
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  title = 'Hobbies';
  selectedIndex = 0;
  sportname;
  sliderTwo: any;
  HobbiesData: any = [];
  userlist: any = [];
  buttonColor: any = [];
  recherche: any;
  follower = false;
  idFollowtoDelete
  EtatSuivre = false;
  follow: Follow = new Follow();
  iduser;
  iduser1;
  idyoooo;
  selectedRow;
  slideOptsTwo = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: -30,
    slidesPerView: 3,
    centeredSlides: false,
    loop: true,
    coverflowEffect: {
      rotate: 0,
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
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;

          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex =
            -Math.abs(Math.round(offsetMultiplier)) + 1;
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
      setTransition(duration) {
        const swiper = this;
        swiper.slides
          .transition(duration)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
          )
          .transition(duration);
      },
    },
  };
  isScrollTop: boolean;
  userHobby: UserHobby = new UserHobby();
  hobbies: any;
  rechercheHobby: any;
  apiImgHobby = `${environment.apiImg}hobbies/`;
  recherche2;
  searchResult = "personne n'aime ce hobby!"

  constructor(public hobbiesService: HobbiesService,
    private eventService: EventService,
    private followerService: FollowerService,
    private userservice: UserService,
    private router: Router
  ) {


    this.sliderTwo = {
      isBeginningSlide: true,
      isEndSlide: false,
    };
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);

    this.slideWithNav2.getActiveIndex().then((index) => {
      this.selectedIndex = index + 1;
      this.hobbies.forEach(e => {
        if (e.id === this.selectedIndex) {
          this.hobbiesService.getAllUsersByHobby(e._id).subscribe((res: any) => {
            this.userlist = res.data.data;
            console.log(this.userlist);

          }
          );
        }
      });
    });
  }

  //Call methods to check if slide is first or last to enable disbale navigation
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

  ngOnInit() {
    this.getMe();
    this.getfollow();
    this.getAllHobbies();
  }
  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;

    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);

  }
  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.iduser = res.data.data._id;
    });
  }


  getfollow() {
    this.buttonColor = []
    this.userservice.getMe().subscribe(
      (response) => {
        this.iduser1 = response.data.data.id;
        this.userlist.forEach(element => {
          this.followerService.getFollow(element._id, this.iduser1)
            .subscribe((res) => {
              if (res == null) {

                this.buttonColor.push({ "etat": "no", "iduser": element._id });

                this.EtatSuivre = false;
                this.follower = false;
              } else {
                this.buttonColor.push({ "etat": "yes", "iduser": element._id });

                this.follower = true;

                this.idFollowtoDelete = res._id;
                this.EtatSuivre = true;
              }

            });

        });

      },
      (error) => {
        console.error(error);
      }
    );


  }

  buttonBlock() {
    if (this.EtatSuivre) {
      this.followerService
        .deleteFollow(this.idFollowtoDelete)
        .subscribe((res) => {
        });
    }

    this.EtatSuivre = false;
    this.getfollow();
  }


  buttonSuivre(idprofilePassed) {

    this.selectedRow = idprofilePassed;
    this.userservice.getMe().subscribe((res) => {
      this.iduser = res.data.data._id;

      this.follow.userFollowed = idprofilePassed;
      this.follow.userFollowing = this.iduser;
      this.followerService.createFollow(this.iduser, this.follow).subscribe((res) => {


      });
    });


    this.getfollow();
    //this.router.navigate(["profilkids",this.idprofilePassed]);

  }


  redirectToprofile(userpassedid, role) {
    this.userservice.getMe().subscribe(
      (response) => {
        this.iduser1 = response.data.data.id;
        console.log(this.iduser1);
        console.log(userpassedid);

        if (this.iduser1 === userpassedid) {
          this.router.navigateByUrl(`/tabs/layouts/coachprofile/${this.iduser1}/me/coachphoto`);
        } else {
          this.followerService.getFollow(userpassedid, this.iduser1)
            .subscribe((res) => {
              if (res == null) {
                this.router.navigate(['profil', userpassedid, 'adulte']);
              } else {
                if (res != null) {
                  if (role === 'user' || role === 'pro') {
                    this.router.navigate(['menu/tabs/layouts/coachprofile', userpassedid, 'followed']);
                  }
                }
              }
            });
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getAllHobbies() {
    this.hobbiesService.getHobbies().subscribe((res: any) => {
      this.hobbies = res.data.data;
      this.hobbies.sort((a, b) => a.id - b.id);
    });
  }
  getAllUsersByHobby(hobby) {
    this.hobbiesService.getAllUsersByHobby(hobby).subscribe(res => console.log(res));
  }

}
