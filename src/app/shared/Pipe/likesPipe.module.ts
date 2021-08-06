import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesPipe } from './likes.pipe';



@NgModule({
  declarations: [LikesPipe],
  exports: [LikesPipe],
  imports: [
    CommonModule
  ]
})
export class LikesPipeModule { }
