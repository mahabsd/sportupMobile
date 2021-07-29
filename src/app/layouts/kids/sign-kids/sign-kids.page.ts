/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eqeqeq */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginKidsService } from './login-kids.service';
import { Storage } from '@ionic/storage';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ToastController } from '@ionic/angular';
import { PatternValidator } from 'src/app/shared/patternValidator';
import { AuthService } from 'src/app/shared/Auth/auth.service';
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
    private imagePicker: ImagePicker,
    private crop: Crop,
    private transfer: FileTransfer,
    private storage: Storage,
    public fb: FormBuilder,    private toastCtrl: ToastController,
    private router: Router,
    public LoginKidsService: LoginKidsService, public loginService: AuthService) { }
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
  cropUpload() {
    console.log('test');
    this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {

      for (let i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.crop.crop(results[i], { quality: 100 })
            .then(
              newImage => {
                console.log('new image path is: ' + newImage);
                const fileTransfer: FileTransferObject = this.transfer.create();
                const uploadOpts: FileUploadOptions = {
                  fileKey: 'file',
                  fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
                };
                fileTransfer.upload(newImage, 'http://localhost:3000/users', uploadOpts)
                .then((data) => {
                  console.log(data);
                  this.respData = JSON.parse(data.response);
                  console.log(this.respData);
                  this.fileUrl = this.respData.fileUrl;
                }, (err) => {
                  console.log(err);
                });
              },
              error => console.error('Error cropping image', error)
            );
      }
    }, (err) => { console.log(err); });
  }
  SaveUser() {
    console.log('navigate to sign in width successfully');
  }

  ChangeImage() {
    console.log('Change Image');
  }
  login() {
/*
    this.LoginKidsService.login(this.user).subscribe((response) => {
      console.log('hello user', response);
      if (response.token)
      {

        this.storage.set('token', response.token);
        console.log('hello user', response);
      } else {
        console.log('not user');
      }
    });*/


    this.loginService.login(this.user).subscribe(async (response) => {
       console.log('hello user', response.user.role);
      if( response.user.role=="kids"){
        this.router.navigateByUrl('/accueil');

      }
      else {
      this.presentToast('vous n\'avez pas le droit d\accées','warning','top');
      }

    },
    error=>{
      console.error(error);

    }

    );




  }
  ResetPassword(){
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
