import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Auth/auth.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
})
export class ParametrePage implements OnInit {
  isParam: boolean;
  user: any;
  apiImg = environment.apiImg + 'User/';
  name: any;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.getMe();
  }
  getMe() {
    this.userService.getMe().subscribe(async res => {
      this.user = res.data.data;
      this.name = this.user.name
    });


  }
  logout() {
    this.authService.logout();
  }
}
