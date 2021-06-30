import { AuthService } from './../../shared/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { PatternValidator  } from "../../shared/patternValidator";
import { User } from 'src/app/shared/Model/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loginForm: FormGroup;
  fileUrl: any = null;
  respData: any;
 user:User=new User()
  
  constructor(
        public fb: FormBuilder,
    public loginService: AuthService) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      emailControl: new FormControl('', [Validators.required,
      PatternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      passwordControl: new FormControl('', Validators.required)
    });
  }
  ConnectFacebook() {
    console.log('hello facebook');
  }
  ConnectGoogle() {
    console.log('hello google');
  }
 
  login() {
    console.log(this.user);
    
    this.loginService.login(this.user).subscribe((response) => {
      console.log('hello user', response);
     
    }, err => {
      this.loginService.presentToast(err, 'danger', 'top');
      console.log(err);

    }
    
    );

  }
 
}
