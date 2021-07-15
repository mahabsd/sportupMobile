import { AuthService } from './../../shared/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { PatternValidator } from '../../shared/patternValidator';
import { User } from 'src/app/shared/Model/User';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  fileUrl: any = null;
  respData: any;
  user: User = new User();

  constructor(
    public fb: FormBuilder,
    private toastCtrl: ToastController,
    private router: Router,
    public loginService: AuthService) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      emailControl: new FormControl('', [Validators.required,
      // eslint-disable-next-line max-len
      PatternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      passwordControl: new FormControl('', Validators.required)
    });
  }
  connectFacebook() {
    console.log('hello facebook');
  }
  connectGoogle() {
    console.log('hello google');
  }

  async login() {
    // console.log(this.user);

    this.loginService.login(this.user).subscribe(async (response) => {
      // console.log('hello user', response);
      this.router.navigateByUrl('/tabs/home');
    }

    );

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
