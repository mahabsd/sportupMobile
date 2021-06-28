import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Storage } from '@ionic/storage';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  fg: FormGroup;
  fileUrl: any = null;
  respData: any;
  user = {
    email: '',
    password: ''
  };
  logForm(form) {
    console.log(this.user);
    this.user.email = '';
    this.user.password = '';
  }
  constructor(
    private imagePicker: ImagePicker,
    private crop: Crop,
    private transfer: FileTransfer,
    private storage: Storage,
    public fb: FormBuilder,
    public loginService: LoginService) { }
  ngOnInit() {
    this.fg = this.fb.group({
      emailControl: new FormControl('', Validators.required),
      passwordControl: new FormControl('', Validators.required)
    });
  }
  ConnectFacebook() {
    console.log('hello facebook');
  }
  ConnectGoogle() {
    console.log('hello google');
  }
  
  
  ChangeImage() {
    console.log('Change Image');
  }
  login() {
    this.loginService.login(this.user).subscribe((response) => {
      console.log('hello user', response);
      if (response.token)
      {
        
        this.storage.set('token', response.token);
        console.log('hello user', response);
      } else {
        console.log('not user');
      }
    });

  }
  ResetPassword(){
    console.log('reset password');
  }
}
