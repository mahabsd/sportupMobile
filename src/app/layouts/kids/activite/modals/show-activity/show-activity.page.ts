import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { ActiviteKidService } from 'src/app/shared/Service/activite-kid.service';

@Component({
  selector: 'app-show-activity',
  templateUrl: './show-activity.page.html',
  styleUrls: ['./show-activity.page.scss'],
})
export class ShowActivityPage implements OnInit {
  Activity = "découvert tes activitées";
  activities;
  constructor(private activiteKidService: ActiviteKidService,
    private modalController: ModalController,
    private navParams: NavParams,

  ) { }

  ngOnInit() {
    console.table(this.navParams);

    this.getAll(this.navParams.data.paramID);
  }
  getAll(activity) {
    this.activiteKidService.getAll(activity).subscribe((res) => {
      this.activities = res.data.data;
      console.log(this.activities);
    });
  }


  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }
  delete(activityID) {
    this.activiteKidService.deleteActivity(activityID).subscribe(res => console.log(res))
  }
}
