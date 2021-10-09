import { Injectable, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { FooterPageModule } from '../../component/footer/footer.module';
import { StatusComponent } from './status/status.component';
import { ReactionsPage } from './reactions/reactions.page';
import { ComponentModule } from '../../component/component.module';
import { CommentsPage } from './comments/comments.page';
import { CommentsPageModule } from './comments/comments.module';
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CommonModule } from "@angular/common";

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
    HomePageRoutingModule,
    FooterPageModule,
    ComponentModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    CommentsPageModule],
  declarations: [HomePage, StatusComponent],
  exports: [HomePage, StatusComponent],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],

})
export class HomePageModule { }
