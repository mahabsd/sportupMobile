import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/Shared/Auth/auth.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { StorageService } from '../../../shared/Service/storage.service';

@Component({
  selector: 'app-coach-menu-pop-over',
  templateUrl: './coach-menu-pop-over.component.html',
  styleUrls: ['./coach-menu-pop-over.component.scss'],
})
export class CoachMenuPopOverComponent implements OnInit {
  user$: any;
  // isconnected: boolean = false;

  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private modalCtrl: ModalController,
    private storageService: StorageService) { }

  ngOnInit() {
    this.getMe();
  }

  getMe() {
    this.userService.getMe().subscribe(async res => {
      console.log(res.data.data);
      this.user$ = res.data.data;
    });
  }
  logout() {
    this.authService.logout();
  }

}
