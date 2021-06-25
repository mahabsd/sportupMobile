import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninService } from '../signin/signin.service';
import { User } from '../signin/user';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
@Component({
  selector: 'app-signinformation',
  templateUrl: './signinformation.page.html',
  styleUrls: ['./signinformation.page.scss'],
})
export class SigninformationPage implements OnInit {
  userImg: any = '';
  base64Img = '';
  gelleryOptions: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    allowEdit: true
  };
  id: number;
  Editdata: User;
  data: any;
  fg: FormGroup;
  user = {
    age: '',
    taille: '',
    poids: '',
    sexe: ''
  };
  logForm(form) {
    // manzeh 1 / pharmacie
    // 6 persone / groupe
    console.log(this.user);
    this.user.age = '';
    this.user.taille = '';
    this.user.poids = '';
    this.user.sexe = '';
  }
  constructor(
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private camera: Camera,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public signinService: SigninService
  ) {
    this.Editdata = new User();
    this.route.queryParams.subscribe(params => {
      if (params && params.data) {
        this.data = JSON.parse(params.data);
        console.log('new passing data', this.data);
      }
    });

    this.userImg = 'assets/imgs/logo.png';
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
  // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  openGallery() {
    this.camera.getPicture(this.gelleryOptions).then((imgData) => {
      console.log('image data =>  ', imgData);
      this.base64Img = 'data:image/jpeg;base64,' + imgData;
      this.userImg = this.base64Img;
    }, (err) => {
      console.log(err);
    });
  }
  ConnectFacebook() {
    console.log('hello facebook go to inscription by facebook');
  }
  ConnectGoogle() {
    console.log('hello google go to inscription by google');
  }
  SaveUser() {
    this.Editdata.User_First_Name = this.data.User_First_Name;
    this.Editdata.User_Email = this.data.User_Email;
    this.Editdata.User_Password = this.data.User_Password;
    this.Editdata.User_Naissance = this.user.age;
    this.Editdata.User_Cut = this.user.poids;
    this.Editdata.User_Weight = this.user.taille;
    this.Editdata.User_Sexe = this.user.sexe;
    this.signinService.updateItem(this.data._id, this.Editdata).subscribe(response => {
      this.router.navigate(['/home']);
      console.log(response);
    });
    console.log('user updated successfully');
    this.user.age = '';
    this.user.taille = '';
    this.user.poids = '';
    this.user.sexe = '';
  }
  login() {
    console.log('back to user');
  }
  ResetPassword() {
    console.log('reset passowrd');
  }
}
