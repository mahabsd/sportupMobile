import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/Shared/Auth/auth.service';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { StorageService } from '../../../shared/Service/storage.service';

@Component({
  selector: 'app-coach-menu-pop-over',
  templateUrl: './coach-menu-pop-over.component.html',
  styleUrls: ['./coach-menu-pop-over.component.scss'],
})
export class CoachMenuPopOverComponent implements OnInit {
  user$: any;
  iduser1
  follower = false;
   isconnected: boolean = false;
   @Input() Etatfollow: string;
   @Input() IdprofilePassed: string;

  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private modalCtrl: ModalController,
    private storageService: StorageService, 
    private followerService: FollowerService,
    ) { }

  ngOnInit() {
    this.getMe();
  //  this.getfollow()
  if(this.Etatfollow==='followed'){
    this.follower=true
  }
  else  if(this.Etatfollow==='me'){
    this.follower=false
  }
    console.log("popover"+this.IdprofilePassed)
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

  desabonner(){
   
      this.followerService
        .deleteFollow(this.IdprofilePassed)
        .subscribe((res) => {
          console.log(res);
          this.router.navigate(["profil",this.IdprofilePassed,'adulte']);

        });
    

  }
}
