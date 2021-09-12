import { AuthService } from '../../../Shared/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/Model/User';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatternValidator } from 'src/app/Shared/patternValidator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-erp',
  templateUrl: './login-erp.page.html',
  styleUrls: ['./login-erp.page.scss'],
})
export class LoginErpPage implements OnInit {
  user: User = new User();
  loginForm: FormGroup;
  constructor(private authService: AuthService,
    private toastCtrl: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailControl: new FormControl('', [Validators.required,
      // eslint-disable-next-line max-len
      PatternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      passwordControl: new FormControl('', Validators.required)
    });

  }
  login() {
    // console.log(this.user);

    this.authService.login(this.user).subscribe((response) => {
      // console.log('hello user', response);
      // 1 response.role ==="admin"
      // 2 navigate to ('erp')
      // else presentToast('vous navez pas le droit daccess', 'danger', 'top')
      // navigate to /tabs/home

      if (response.user.role === 'admin') {
        this.router.navigateByUrl('/erp/erp-space');
      }
      else {
        this.presentToast('vous navez pas le droit daccess', 'danger', 'top');
      }
    }, error => {


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
}
