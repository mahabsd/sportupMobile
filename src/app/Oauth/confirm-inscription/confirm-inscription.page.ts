import { AuthService } from './../../shared/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { PatternValidator } from "../../shared/patternValidator";
import { User } from 'src/app/shared/Model/User';
import { UserService } from '../../shared/Service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-inscription',
  templateUrl: './confirm-inscription.page.html',
  styleUrls: ['./confirm-inscription.page.scss'],
})
export class ConfirmInscriptionPage implements OnInit {
  loginForm: FormGroup;
  fileUrl: any = null;
  respData: any;
  code: string = '';

  constructor(
    public fb: FormBuilder,
    private active: ActivatedRoute,
    public userService: UserService) { }
  ngOnInit() {
    this.active.params.subscribe(res => {
      console.log(res);

    })
  }
  ConnectFacebook() {
    console.log('hello facebook');
  }
  ConnectGoogle() {
    console.log('hello google');
  }

  confirmer() {
    console.log(this.code);

    this.userService.confirmInscription(this.code).subscribe((response) => {
      console.log('hello user', response);

    }, err => {

      console.log(err);

    }

    );

  }

}
