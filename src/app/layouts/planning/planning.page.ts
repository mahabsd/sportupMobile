import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarModalPage } from '../Planing/calendar-modal/calendar-modal.page';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { EventListModalComponent } from './event-list-modal/event-list-modal.component';
import { IonSlides, IonSlide, IonContent } from '@ionic/angular';
@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {

  selectedDate;
  calendar = {
    mode: 'month',
    locale:  'en-GB',
    currentDate: new Date(),
  };
  @ViewChild('slides') slides: IonSlides;
  next() {
    this.slides.slideNext();
  }
  
  back() {
    this.slides.slidePrev();
  }

  onTimeSelected(event){
    // eslint-disable-next-line max-len
    this.selectedDate = event.selectedTime;
  }

  
  @ViewChild(CalendarModalPage) myCal: CalendarComponent;
  constructor(public modalController: ModalController) { }


  async openList() {
    const modal = await this.modalController.create({
      component: EventListModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  ngOnInit() {
    this.selectedDate = new Date();
  }

}
