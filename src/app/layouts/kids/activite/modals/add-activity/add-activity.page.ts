import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { ActiviteKidService } from 'src/app/shared/Service/activite-kid.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';

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
  validForm: boolean;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private activiteKidService: ActiviteKidService,
    private userservice: UserService,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.dropDown = false;
    this.validForm = false;
    this.cours = false;
    this.jeux = false;
    this.devoirs = false;
    this.suivi = false;
    this.recompense= false;
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.activityKid = new FormGroup({
      activite: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      user: new FormControl(this.user$),
      linkTitle: new FormControl('',)
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
    console.log(this.activityKid.valid);

    if (this.activityKid.valid) {
      this.validForm = true;
      this.activiteKidService.addActivity(this.activityKid.value).subscribe(res => {
        this.activityKid = new FormGroup({
          activite: new FormControl('', Validators.required),
          content: new FormControl('', Validators.required),
          user: new FormControl(this.user$),
          linkTitle: new FormControl('',)
        });
        this.cours = false;
        this.jeux = false;
        this.devoirs = false;
        this.suivi = false;
        this.recompense= false;
        this.presentToast('activité créée avec succés', 'success', 'bottom');
      });
      this.validForm = false;
    }
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
      activite: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      user: new FormControl(this.user$),
      linkTitle: new FormControl('',)
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
