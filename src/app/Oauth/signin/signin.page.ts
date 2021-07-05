import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { User } from 'src/app/shared/Model/User';
import { PatternValidator } from 'src/app/shared/patternValidator';
import { UserService } from '../../shared/Service/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  section: string = '1';
  role: string = '';
  registerForm: FormGroup;
  particulierForm: FormGroup;
  user: User = new User();
  myToast: any;
  constructor(
    public fb: FormBuilder,
    private toastCtrl: ToastController,
    public signinService: UserService,
    public router: Router) {

  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      emailControl: new FormControl('', [Validators.required,
      PatternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      passwordControl: new FormControl('', Validators.required),
      confirmPasswordControl: new FormControl('', Validators.required),

      nameControl: new FormControl('', Validators.required),
      roleControl: new FormControl('', Validators.required),
      phoneControl: new FormControl('', Validators.required),

    });
    this.particulierForm = new FormGroup({
      dateNaissanceControl: new FormControl('', Validators.required),
      heightControl: new FormControl('', Validators.required),
      weightControl: new FormControl('', Validators.required),
      sexeControl: new FormControl('', Validators.required),

    })
  }
  ConnectFacebook() {
    console.log('hello facebook');
  }
  ConnectGoogle() {
    console.log('hello google');

  }
  enableSection(event) {
    // console.log(event.target);
    // console.log(this.user.role);

    this.section = event.target.id
    this.role = this.user.role
  }
  SaveUser() {
    console.log(this.user);
    this.signinService.signUp(this.user).subscribe(res => {
      console.log(res);

      this.presentToast("Bienvenue " + this.user.name, 'success', 'middle');
      this.router.navigateByUrl('/confirmation');
    }, err => {
      this.presentToast(err, 'danger', 'top');
    });
  }

  login() {
    console.log('back to user');

  }
  ResetPassword() {
    console.log('reset Password');
  }
  async presentToast(message, color, position) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      color,
      position
    });
    toast.present();
  }
}
