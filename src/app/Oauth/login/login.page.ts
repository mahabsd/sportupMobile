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
  cropUpload() {
    console.log('test');
    this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
      
      for (let i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.crop.crop(results[i], { quality: 100 })
            .then(
              newImage => {
                console.log('new image path is: ' + newImage);
                const fileTransfer: FileTransferObject = this.transfer.create();
                const uploadOpts: FileUploadOptions = {
                  fileKey: 'file',
                  fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
                };
                fileTransfer.upload(newImage, 'http://localhost:3000/users', uploadOpts)
                .then((data) => {
                  console.log(data);
                  this.respData = JSON.parse(data.response);
                  console.log(this.respData);
                  this.fileUrl = this.respData.fileUrl;
                }, (err) => {
                  console.log(err);
                });
              },
              error => console.error('Error cropping image', error)
            );
      }
    }, (err) => { console.log(err); });
  }
  SaveUser() {
    console.log('navigate to sign in width successfully');
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
