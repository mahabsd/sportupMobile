import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { User } from 'src/app/Shared/Model/User';
import { PatternValidator } from 'src/app/Shared/patternValidator';
import { UserService } from '../../Shared/Service/user.service';
import { ToastController } from '@ionic/angular';
import { HobbiesService } from 'src/app/shared/Service/hobbies.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  section = '1';
  role = '';
  registerForm: FormGroup;
  particulierForm: FormGroup;
  proForm: FormGroup;
  user: User = new User();
  myToast: any;
  hobbies: any;
  constructor(
    public fb: FormBuilder,
    private toastCtrl: ToastController,
    public signinService: UserService,
    public router: Router,
    public hobbiesService: HobbiesService) {

  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      emailControl: new FormControl('', [Validators.required,
      // eslint-disable-next-line max-len
      PatternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      passwordControl: new FormControl('', Validators.required),
      confirmPasswordControl: new FormControl('', Validators.required),

      nameControl: new FormControl('', Validators.required),
      roleControl: new FormControl('', Validators.required),
      hobby: new FormControl(''),
    });
    this.particulierForm = new FormGroup({
      dateNaissanceControl: new FormControl('', Validators.required),
      heightControl: new FormControl('', Validators.required),
      weightControl: new FormControl('', Validators.required),
      sexeControl: new FormControl('', Validators.required),

    });
    this.proForm = new FormGroup({
      phoneControl: new FormControl('', [Validators.required, Validators.minLength(8)]),
      adresseControl: new FormControl('', Validators.required),
      activiteControl: new FormControl('', Validators.required)

    });
    this.hobbiesService.getHobbies().subscribe(res => console.log(res));
  }
  connectFacebook() {
    console.log('hello facebook');
  }
  connectGoogle() {
    console.log('hello google');

  }
  enableSection(event) {
    console.log(event.target);
    console.log('section', this.section);
    console.log(this.user.role);

    // this.section = '';
    this.section = event.target.id;
    this.role = this.user.role;
  }
  saveUser() {
    this.signinService.signUp(this.user).subscribe(res => {
      console.log(res);

      this.presentToast('Bienvenue ' + this.user.name, 'success', 'middle');
      this.router.navigateByUrl('/confirmation');
    }, err => {
      this.presentToast(err, 'danger', 'top');
    });

    //add hobby to the registered user
    //    console.log(this.hobbies);
    // this.hobbiesService.addHobby(this.hobbies)
  }

  async presentToast(message, color, position) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 5000,
      color,
      position
    });
    toast.present();
  }
}
