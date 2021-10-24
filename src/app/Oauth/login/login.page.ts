import { AuthService } from '../../Shared/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PatternValidator } from '../../Shared/patternValidator';
import { User } from 'src/app/Shared/Model/User';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
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
    loginLabels = ['','','']

  constructor(
    public fb: FormBuilder,
    private toastCtrl: ToastController,
    private alertController: AlertController,
    private router: Router,
    public authService: AuthService,
    private translate: TranslateService,
    private storage: Storage) {
      translate.setDefaultLang('en');
 
      this.storage.get('lan').then((val) => {
        if(val)
        translate.use(val);
      });
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,
      // eslint-disable-next-line max-len
      PatternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required)
    });


    
  }
  connectFacebook() {
    console.log('hello facebook');
  }
  connectGoogle() {
    console.log('hello google');
  }

  login() {
    // console.log(this.loginForm);

    this.authService.login(this.loginForm.value).subscribe((response) => {
      // console.log('hello user', response);

      if (response.user.role === "user"||response.user.role === "pro"||response.user.role === "admin") {
        location.href = '/menu/tabs/home';

      }
      else {
        this.presentToast('vous n\'avez pas le droit d\accées', 'warning', 'top');
      }

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
