import { AuthService } from './../../shared/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/Model/User';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-erp',
  templateUrl: './login-erp.page.html',
  styleUrls: ['./login-erp.page.scss'],
})
export class LoginErpPage implements OnInit {
user:User=new User()
  constructor(private authService: AuthService,
    private toastCtrl:ToastController
  ) { }

  ngOnInit() {
  }
  login() {
    // console.log(this.user);

    this.authService.login(this.user).subscribe((response) => {
      // console.log('hello user', response);
// 1 response.role ==="admin"
      // 2 navigate to ('erp')
      // else presentToast('vous navez pas le droit daccess', 'danger', 'top')
      // navigate to /tabs/home
      location.href = '/tabs/home';
    }, error => {
      console.error(error);

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
