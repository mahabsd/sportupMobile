import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';

import { CoachprofilePageRoutingModule } from './coachprofile-routing.module';
import { CoachprofilePage } from './coachprofile.page';
import { ComponentModule } from '../../component/component.module';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from '../home/home.module';
import { CoachphotoPage } from './coachphoto/coachphoto.page';
import { CoachpubPage } from './coachpub/coachpub.page';
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';
@Injectable()
export class LazyLoadImageHooks extends IntersectionObserverHooks {
  toast: any;
  constructor(private toastController: ToastController) {
    super();
  };
  setup(attributes: Attributes) {
    attributes.offset = 10;
    attributes.defaultImagePath = '../../../assets/imgs/150.png';
    attributes.errorImagePath = '../../../assets/imgs/150.png';
    return super.setup(attributes);
  }
  // loadImage(attributes: Attributes) {
  //   return from(this.toastController.create({
  //     message: '',
  //     color: 'light',
  //     duration: 1
  //   })).pipe(switchMap(toast => toast.present()),
  //     switchMap(_ => super.loadImage(attributes))
  //   );

  // }
}




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachprofilePageRoutingModule,
    ComponentModule,
    HomePageModule,
    LazyLoadImageModule,
  ],
  declarations: [CoachprofilePage, CoachphotoPage, CoachpubPage],
  exports: [CoachprofilePage, CoachphotoPage, CoachpubPage],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],

})
export class CoachprofilePageModule { }
