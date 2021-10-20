import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';

import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';
import { ToastController } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/modules/shared.module';
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
  declarations: [],
  imports: [
    CommonModule,
    KidsRoutingModule,
    LazyLoadImageModule,
    SharedModule,
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],

})
export class KidsModule { }
