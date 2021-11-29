import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
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
  Activity = 'Ajouter une activité';
  activity;
  user$: any;
  content: any;
  activite: any;
  activityKid: FormGroup;
  dropDown: boolean;
  public;
  private;
  cours: boolean;
  jeux: boolean;
  devoirs: boolean;
  suivi: boolean;
  recompense: boolean;
  rows: any = [1];
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private activiteKidService: ActiviteKidService,
    private userservice: UserService,
    private toastCtrl: ToastController,
    ) { }

  ngOnInit() {
    this.private = false;
    this.public = true;
    this.dropDown = false;
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.activityKid = new FormGroup({
      activite: new FormControl(''),
      content: new FormControl(''),
      user: new FormControl(this.user$)
    });
    this.getMe();
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
    this.activiteKidService.addActivity(this.activityKid.value).subscribe(res=>{
     this.presentToast('activité crée avec succés', 'success', 'bottom');
     });
  }
  openDropDown() {
    if (this.dropDown === false) {
      this.dropDown = true;
    }
    else if (this.dropDown === true) {
      this.dropDown = false;
    }
  }
  addInput() {
    this.activityKid = new FormGroup({
      activite: new FormControl(''),
      content: new FormControl(''),
      user: new FormControl(this.user$)
    });
    this.rows.push(this.rows.length);
  }
  async presentToast(message, color, position) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position
    });
    toast.present();
  }
}
