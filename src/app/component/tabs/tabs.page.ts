import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalShearePage } from 'src/app/layouts/home/modal-sheare/modal-sheare.page';
import { UserService } from 'src/app/Shared/Service/user.service';
import { CameraSource } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';
import { ImageService } from 'src/app/Shared/Service/image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventService } from 'src/app/shared/Service/event.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  user$: any = [];
  menuOpened = false;
  userid
  subscription: Subscription;
  pagetype: string;
   urlpage = this.router.url.split('/', 6);

  constructor(
    private imageService: ImageService,
    private modalController: ModalController,
    private router: Router,
    private userservice: UserService,
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.getMe();
    this.subscription = this.eventService.getMessage().subscribe((message) => {
      this.menuOpened = message.event;
    });
  }

  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.user$ = res.data.data;
      this.userid= res.data.data._id;

    });
  }


  openMenu() {
    this.menuOpened = true;
  }

  openModal() {
    const url = this.router.url.split('/', 6);

    if (url[3] === 'home') {
      this.openShareModal('home');
      console.log(url[3]);
    }
    if (url[4] === 'coachprofile') {
      this.sendMessage('addphoto');
      console.log(url[4]);

    }

    if (url[2] === 'accueil') {
      this.openShareModal("accueil");
      console.log(url[2]);
    }
  }


  async openShareModal(type) {
  
    const modal = await this.modalController.create({
      component: ModalShearePage,
      componentProps: {
        user: this.user$,
        pagetype:type
      },
    });
    await modal.present();
    await modal.onWillDismiss().then((result) => {    
         console.log("tt");
       
  });
  }




  sendMessage(message) {
    // send message to subscribers via observable subject
    this.imageService.sendMessage(message);
  }



  add(event: any) {
    console.log(event);
  }
}
