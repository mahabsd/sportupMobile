import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { SigninService } from './signin.service';
import { AuthService } from '../../shared/Auth/auth.service';
import { UserService } from 'src/app/shared/Service/user.service';
import { User } from 'src/app/shared/Model/User';
import { PatternValidator } from 'src/app/shared/patternValidator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  registerForm: FormGroup;
  user: User = new User();
 
  constructor(
    public fb: FormBuilder,
    public signinService: UserService,
    public router: Router) {
     
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      emailControl: new FormControl('', [Validators.required,
      PatternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      passwordControl: new FormControl('', Validators.required),
      confirmPasswordControl: new FormControl('', Validators.required),
      
      usernameControl: new FormControl('', Validators.required),
     
    });
  }
  ConnectFacebook() {
    console.log('hello facebook');
  }
  ConnectGoogle() {
    console.log('hello google');

  }
  SaveUser() {
  console.log(this.user);
    // this.signinService.signUp(this.user).subscribe((response) => {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          data: JSON.stringify(this.user)
        }
      };
      this.router.navigateByUrl('/signinformation', navigationExtras); 
    // });
  }
  login(){
    console.log('back to user');
   
  }
  ResetPassword(){
    console.log('reset Password');
  }
}
