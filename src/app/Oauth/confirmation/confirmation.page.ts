import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Shared/Service/user.service';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/Shared/Model/User';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  code: string = '';
  user: User = new User()
  renvoi: boolean = false
  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    public userService: UserService) { }
  ngOnInit() {

  }

 

    getAge(dateString) {
      const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
  confirmer() {
    console.log(this.code);
    let body = {
      token: this.code
    }
    this.userService.confirmInscription(body).subscribe((response) => {
      console.log('user age', response.data);
      if(this.getAge(response.data)>13)
      {
        console.log('>13');
        
        this.router.navigateByUrl('/login');
      }else{
        console.log('<13');
        
        this.router.navigateByUrl('/kids/sign-kids');
      }
    
    }, err => {
      console.log(err);
      this.presentToast(err?.error?.error?.message, 'danger', 'middle');
    });
  }
  async presentToast(message, color, position) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color,
      position
    });
    toast.present();
  }
  renvoyer() {
    this.renvoi = true;
    this.userService.renvoyerToken(this.user).subscribe((response) => {
      console.log('hello user', response);
      this.renvoi = false;
    }, err => {
      console.log(err);
      this.presentToast(err, 'danger', 'middle');
    });
  }
  activeRenvoi() {
    this.renvoi = true;
  }
}
