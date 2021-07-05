import { AuthService } from './../../shared/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { PatternValidator } from "../../shared/patternValidator";
import { User } from 'src/app/shared/Model/User';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../../shared/Service/user.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {

  showReset: boolean = false
  forgotForm: FormGroup;
  resetForm: FormGroup;
  fileUrl: any = null;
  respData: any;
  user: User = new User()
  codeToken: any
  constructor(
    public fb: FormBuilder,
    private toastCtrl: ToastController,
    private router: Router,
    public userService: UserService) { }
  ngOnInit() {
    this.forgotForm = new FormGroup({
      emailControl: new FormControl('', [Validators.required,
      PatternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),

    });
    this.resetForm = new FormGroup({
      passwordControl: new FormControl('', Validators.required),
      passwordConfirmControl: new FormControl('', Validators.required),
      codetokenControl: new FormControl('')
    });
  }
  ConnectFacebook() {
    console.log('hello facebook');
  }
  ConnectGoogle() {
    console.log('hello google');
  }

  async forgotPassword() {
    console.log(this.user);
    this.userService.forgotPassword(this.user).subscribe(async (response) => {
      console.log('hello user', response);
      this.showReset = true
    }, async err => {
      await this.presentToast(err?.error?.message, 'danger', 'top');
      console.log(err);
      await err?.status == 402 && this.presentToastWithOptions(err?.error?.message);

    }

    );

  }
  async resetPassword() {
    let body = {
      token: this.codeToken,
      user:this.user
    }

    this.userService.resetPassword(body).subscribe(async (response) => {
      console.log('hello user', response);
      this.router.navigateByUrl('/login');
      await this.presentToast(response.status, 'success', 'middle');
    }, async err => {
      await this.presentToast(err?.error?.message, 'danger', 'top');
      console.log(err);
      await err.status == 402 && this.presentToastWithOptions(err?.error?.message);

    }

    );

  }

  async presentToast(message, color, position) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color,
      position
    });
    toast.present();
  }
  async presentToastWithOptions(message) {
    const toast = await this.toastCtrl.create({
      header: '',
      message,
      position: 'top',

      buttons: [
        {
          side: 'start',

          text: 'Confirmer',
          handler: () => {

            this.router.navigateByUrl('/confirmation');
          }
        }, {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
