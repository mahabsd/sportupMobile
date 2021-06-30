import { Component, OnInit ,  AfterViewInit} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.page.html',
  styleUrls: ['./calendar-modal.page.scss'],
})
export class CalendarModalPage implements OnInit {
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  viewTitle: string;
  evaluation = {
    une : true,
    deux : true,
    troix : false,
    quatre : false,
    cinq : false
  }
  event = {
    Heures: '',
    Activite: '',
    Lieu: '',
    Notes: '',
    title: '',
    startTime: '',
    endTime: '',
    allDay: true
  };

  modalReady = false;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }
  save() {    
    this.modalCtrl.dismiss({event: this.event})
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  // onTimeSelected(ev) {    
  //   this.event.startTime = new Date(ev.selectedTime);
  // }
  close() {
    this.modalCtrl.dismiss();
  }
}
