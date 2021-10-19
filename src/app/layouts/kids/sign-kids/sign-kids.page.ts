/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eqeqeq */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ToastController } from '@ionic/angular';
import { PatternValidator } from 'src/app/Shared/patternValidator';
import { AuthService } from 'src/app/Shared/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-kids',
  templateUrl: './sign-kids.page.html',
  styleUrls: ['./sign-kids.page.scss'],
})
export class SignKidsPage implements OnInit {
  loginForm: FormGroup;

  fg: FormGroup;
  fileUrl: any = null;
  respData: any;
  user = {
    email: '',
    password: ''
  };

  constructor(
    private toastCtrl: ToastController,
    public fb: FormBuilder,
    private router: Router,
    public authService: AuthService) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      emailControl: new FormControl('', [Validators.required,
      // eslint-disable-next-line max-len
      PatternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      passwordControl: new FormControl('', Validators.required)
    });
  }
  logForm(form) {
    console.log(this.user);
    this.user.email = '';
    this.user.password = '';
  }

  ConnectFacebook() {
    console.log('hello facebook');
  }
  ConnectGoogle() {
    console.log('hello google');
  }

  SaveUser() {
    console.log('navigate to sign in width successfully');
  }

  ChangeImage() {
    console.log('Change Image');
  }
  login() {



    this.authService.login(this.user).subscribe(async (response) => {
      if (response.user.role === "kids") {
        this.router.navigateByUrl('/tabsKids/accueil');

      }
      else {
        this.presentToast('vous n\'avez pas le droit d\accées', 'warning', 'top');
      }

    },
      error => {
        console.error(error);

      }

    );




  }
  ResetPassword() {
    console.log('reset password');
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
