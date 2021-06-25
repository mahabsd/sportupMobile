"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SigninformationPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_1 = require("../signin/user");
var SigninformationPage = /** @class */ (function () {
    function SigninformationPage(platform, statusBar, splashScreen, camera, fb, route, router, signinService) {
        var _this = this;
        this.camera = camera;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.signinService = signinService;
        this.userImg = '';
        this.base64Img = '';
        this.gelleryOptions = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            allowEdit: true
        };
        this.user = {
            age: '',
            taille: '',
            poids: '',
            sexe: ''
        };
        this.Editdata = new user_1.User();
        this.route.queryParams.subscribe(function (params) {
            if (params && params.data) {
                _this.data = JSON.parse(params.data);
                console.log('new passing data', _this.data);
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // this.userImg = 'assets/imgs/logo.png';
    }
    SigninformationPage.prototype.logForm = function (form) {
        console.log(this.user);
        this.user.age = '';
        this.user.taille = '';
        this.user.poids = '';
        this.user.sexe = '';
    };
    SigninformationPage.prototype.ngOnInit = function () {
        this.fg = this.fb.group({
            emailControl: new forms_1.FormControl('', forms_1.Validators.required),
            passwordControl: new forms_1.FormControl('', forms_1.Validators.required),
            confirmControl: new forms_1.FormControl('', forms_1.Validators.required),
            mobileControl: new forms_1.FormControl('', forms_1.Validators.required),
            add1Control: new forms_1.FormControl(''),
            add2COntrol: new forms_1.FormControl(''),
            postcodeControl: new forms_1.FormControl(''),
            stateControl: new forms_1.FormControl('')
        });
    };
    SigninformationPage.prototype.openGallery = function () {
        var _this = this;
        this.camera.getPicture(this.gelleryOptions).then(function (imgData) {
            console.log('image data =>  ', imgData);
            _this.base64Img = 'data:image/jpeg;base64,' + imgData;
            _this.userImg = _this.base64Img;
        }, function (err) {
            console.log(err);
        });
    };
    SigninformationPage.prototype.ConnectFacebook = function () {
        console.log('hello facebook go to inscription by facebook');
    };
    SigninformationPage.prototype.ConnectGoogle = function () {
        console.log('hello google go to inscription by google');
    };
    SigninformationPage.prototype.SaveUser = function () {
        var _this = this;
        this.Editdata.User_First_Name = this.data.User_First_Name;
        this.Editdata.User_Email = this.data.User_Email;
        this.Editdata.User_Password = this.data.User_Password;
        this.Editdata.User_Naissance = this.user.age;
        this.Editdata.User_Cut = this.user.poids;
        this.Editdata.User_Weight = this.user.taille;
        this.Editdata.User_Sexe = this.user.sexe;
        this.signinService.updateItem(this.data._id, this.Editdata).subscribe(function (response) {
            _this.router.navigate(['/home']);
            console.log(response);
        });
        console.log('user updated succefully');
        this.user.age = '';
        this.user.taille = '';
        this.user.poids = '';
        this.user.sexe = '';
    };
    SigninformationPage.prototype.login = function () {
        console.log('back to user');
    };
    SigninformationPage.prototype.ResetPassword = function () {
        console.log('reset passowrd');
    };
    SigninformationPage = __decorate([
        core_1.Component({
            selector: 'app-signinformation',
            templateUrl: './signinformation.page.html',
            styleUrls: ['./signinformation.page.scss']
        })
    ], SigninformationPage);
    return SigninformationPage;
}());
exports.SigninformationPage = SigninformationPage;
