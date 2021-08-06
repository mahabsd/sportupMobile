import { AuthService } from './../../shared/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PatternValidator } from '../../shared/patternValidator';
import { User } from 'src/app/shared/Model/User';
import { ToastController, AlertController } from '@ionic/angular';
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
    private alertController: AlertController,
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
  connectFacebook() {
    console.log('hello facebook');
  }
  connectGoogle() {
    console.log('hello google');
  }

  login() {
    // console.log(this.user);

    this.authService.login(this.user).subscribe((response) => {
      // console.log('hello user', response);
      location.href = '/tabs/home';
    }, error => {
      console.error(error);

      if (error.error.message === 'Vous devez activer votre compte') { this.presentAlertConfirm(error.error.message); }
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



  async presentAlertConfirm(message) {
    const alert = await this.alertController.create({
      cssClass: 'alertCtrl',
      header: 'Confirm!',
      message,
      buttons: [
        {
          text: 'Annuller',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmer',
          handler: () => {
            this.router.navigateByUrl('/confirmation');
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
