import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Auth/auth.service';
import { UserService } from 'src/app/Shared/Service/user.service';
@Component({
  selector: 'app-desactivermoncompte',
  templateUrl: './desactivermoncompte.page.html',
  styleUrls: ['./desactivermoncompte.page.scss'],
})
export class DesactivermoncomptePage implements OnInit {
  passwd;
  reason;
  user;
  option: string;
  dropDown: boolean
  one: string
  two: string
  three: string
  four: string
  five: string
  boldOne: string
  boldTwo: string
  boldThree: string
  boldFour: string
  boldFive: string
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.option = ''
    this.dropDown=false
    this.getUser()
  }

  getUser() {
    this.userService.getMe().subscribe(async (res) => {
      this.user=await res.data.data
    });
  }

  toggleDropDown() {
    this.dropDown = !this.dropDown
  }

  choseOne() {
    this.option = "J'ai créé un second compte"
    this.boldOne = "boldOne"
    this.boldTwo = ""
    this.boldThree = ""
    this.boldFour = ""
    this.boldFive=""
  }
  choseTwo() {
    this.option = "Problème d'utilisation"
    this.boldOne = ""
    this.boldTwo = "boldTwo"
    this.boldThree = ""
    this.boldFour = ""
    this.boldFive=""
  }
  choseThree() {
    this.option = "Problème de confidentialité"
    this.boldOne = ""
    this.boldTwo = ""
    this.boldThree = "boldThree"
    this.boldFour = ""
    this.boldFive=""
  }
  choseFour() {
    this.option = "Trop de publicités"
    this.boldOne = ""
    this.boldTwo = ""
    this.boldThree = ""
    this.boldFour = "boldFour"
    this.boldFive=""
  }
  choseFive() {
    this.option = "Autre chose"
    this.boldOne = ""
    this.boldTwo = ""
    this.boldThree = ""
    this.boldFour = ""
    this.boldFive="boldFive"
  }


  deact(){
    const form = {password:this.passwd, reason: this.option}
    console.log(form);
    this.userService.deactivate(form).subscribe(res => {
      this.authService.logout();
      this.router.navigate(['/login']);
    });
  }

}
