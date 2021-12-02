import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { ActiviteKidService } from 'src/app/shared/Service/activite-kid.service';
import { AddActivityPage } from '../add-activity/add-activity.page';

@Component({
  selector: 'app-show-activity',
  templateUrl: './show-activity.page.html',
  styleUrls: ['./show-activity.page.scss'],
})
export class ShowActivityPage implements OnInit {
  Activity = 'découvert tes activitées';
  activities;
  activity: any;
  dataReturned: any;
  courseNumber: any;
  gamesNumber: any;
  examsNumber: any;
  recompenseNumber: any;
  dropDown: any;
  notchecked: boolean;
  checked: boolean;

  constructor(private activiteKidService: ActiviteKidService,
    private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.courseNumber = 1;
    this.gamesNumber = 3;
    this.examsNumber = 4;
    this.recompenseNumber = 0;
    this.dropDown = false;
    this.notchecked = false;
    this.checked = false;
    this.activity = this.navParams.data.paramID;
    this.getAll(this.activity);
  }
  getAll(activity) {
    this.activiteKidService.getAll(activity).subscribe((res) => {
      this.activities = res.data.data;

    });
  }
  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }
  delete(activityID) {
    this.activiteKidService.deleteActivity(activityID).subscribe(res => this.getAll(this.activity));
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddActivityPage,
      componentProps: {
        paramID: 123,
        paramTitle: 'Test Title'
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });
    return await modal.present();
  }
  goToUrl(url) {
    window.location.href=url;
}
}
