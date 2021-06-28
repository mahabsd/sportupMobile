import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { SigninService } from './signin.service';
import { User } from './user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  data: User;

  fg: FormGroup;
  user = {
    name: '',
    mail: '',
    password: '',
    confirmepassword: ''
  };
  logForm(form) {
    console.log(this.user);
    this.user.name = '';
    this.user.mail = '';
    this.user.password = '';
    this.user.confirmepassword = '';
  }
  constructor(
    public fb: FormBuilder,
    public signinService: SigninService,
    public router: Router) {
      this.data = new User();
  }

  ngOnInit() {
    this.fg = this.fb.group({
      emailControl: new FormControl('', Validators.required),
      passwordControl: new FormControl('', Validators.required),
      confirmControl: new FormControl('', Validators.required),
      mobileControl: new FormControl('', Validators.required),
      add1Control: new FormControl(''),
      add2COntrol: new FormControl(''),
      postcodeControl: new FormControl(''),
      stateControl: new FormControl('')
    });
  }
  ConnectFacebook() {
    console.log('hello facebook');
  }
  ConnectGoogle() {
    console.log('hello google');

  }
  SaveUser() {
    console.log('user information saved succefull');
    // console.log(this.user)
    this.data.User_Email = this.user.name;
    this.data.User_Password = this.user.password;
    this.data.User_First_Name = this.user.name;

    this.signinService.createItem(this.data).subscribe((response) => {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          data: JSON.stringify(response)
        }
      };
      this.router.navigate(['/signinformation'], navigationExtras);
      console.log(response);
      this.user.name = '';
      this.user.mail = '';
      this.user.password = '';
      this.user.confirmepassword = '';
    });
  }
  login(){
    console.log('back to user');
   
  }
  ResetPassword(){
    console.log('reset Password');
  }
}
