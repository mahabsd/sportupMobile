"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SigninPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_1 = require("./user");
var SigninPage = /** @class */ (function () {
    function SigninPage(fb, signinService, router) {
        this.fb = fb;
        this.signinService = signinService;
        this.router = router;
        this.user = {
            name: '',
            mail: '',
            password: '',
            confirmepassword: ''
        };
        this.data = new user_1.User();
    }
    SigninPage.prototype.logForm = function (form) {
        console.log(this.user);
        this.user.name = '';
        this.user.mail = '';
        this.user.password = '';
        this.user.confirmepassword = '';
    };
    SigninPage.prototype.ngOnInit = function () {
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
    SigninPage.prototype.ConnectFacebook = function () {
        console.log('hello facebook');
    };
    SigninPage.prototype.ConnectGoogle = function () {
        console.log('hello google');
    };
    SigninPage.prototype.SaveUser = function () {
        var _this = this;
        console.log('user information saved succefull');
        // console.log(this.user)
        this.data.User_Email = this.user.name;
        this.data.User_Password = this.user.password;
        this.data.User_First_Name = this.user.name;
        this.signinService.createItem(this.data).subscribe(function (response) {
            var navigationExtras = {
                queryParams: {
                    data: JSON.stringify(response)
                }
            };
            _this.router.navigate(['/signinformation'], navigationExtras);
            console.log(response);
            _this.user.name = '';
            _this.user.mail = '';
            _this.user.password = '';
            _this.user.confirmepassword = '';
        });
    };
    SigninPage.prototype.login = function () {
        console.log('back to user');
        // this.user.mail='';
        // this.user.password='';
    };
    SigninPage.prototype.ResetPassword = function () {
        console.log('reset Password');
    };
    SigninPage = __decorate([
        core_1.Component({
            selector: 'app-signin',
            templateUrl: './signin.page.html',
            styleUrls: ['./signin.page.scss']
        })
    ], SigninPage);
    return SigninPage;
}());
exports.SigninPage = SigninPage;
