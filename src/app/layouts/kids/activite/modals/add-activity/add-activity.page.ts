import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ActiviteKidService } from 'src/app/shared/Service/activite-kid.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.page.html',
  styleUrls: ['./add-activity.page.scss'],
})
export class AddActivityPage implements OnInit {

  modalTitle: string;
  modelId: number;
  Activity = "Ajouter une activité";
  activity;
  user$: any;
  content: any;
  activite: any;
  activityKid: FormGroup;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private activiteKidService: ActiviteKidService,
    private userservice: UserService
  ) { }

  ngOnInit() {
    this.getMe();
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.activityKid = new FormGroup({
      activite: new FormControl(''),
      content: new FormControl(''),
      user: new FormControl(this.user$)
    });
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }
  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.activityKid.patchValue({
        user: res.data.data
      });
    });
  }
  confirm() {
    this.activiteKidService.addActivity(this.activityKid.value).subscribe(res => console.log(res));

  }


}
