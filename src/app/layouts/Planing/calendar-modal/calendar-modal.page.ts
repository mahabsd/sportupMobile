import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Activity } from 'src/app/shared/Model/Activity';
import { User } from 'src/app/Shared/Model/User';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.page.html',
  styleUrls: ['./calendar-modal.page.scss'],
})
export class CalendarModalPage implements OnInit {
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  viewTitle: string;
  activity: Activity = new Activity();
  today: Date;
  event = {
    activity: '',
    notes: '',
    lieu: '',
    startTime: null,
    endTime: '',
  };

  modalReady = false;
  user$: any;

  constructor(private modalCtrl: ModalController) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }
  ngOnInit() {
    this.today = new Date();
  }

  save() {
    this.modalCtrl.dismiss({ event: this.event });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
