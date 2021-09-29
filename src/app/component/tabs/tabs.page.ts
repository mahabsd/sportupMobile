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
  subscription: Subscription;
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
      
        console.log('event? : '+message.event);
        this.menuOpened = message.event;
    });
  }

  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.user$ = res.data.data;
      console.log(this.user$);
    });
  }


openMenu(){
  this.menuOpened = true;
}

  openModal() {
    const url = this.router.url.split('/', 6);
    console.log(url);

    if (url[3] === 'home') {
      this.openShareModal();
      console.log(url[3]);
    }
    if (url[4] === 'coachprofile') {
      this.sendMessage('addphoto');
      console.log(url[4]);

    }
  }


  async openShareModal() {
    const modal = await this.modalController.create({
      component: ModalShearePage,
      componentProps: {
        user: this.user$,
      },
    });
    await modal.present();
    await modal.onWillDismiss().then((result) => { });
  }




sendMessage(message) {
  // send message to subscribers via observable subject
  this.imageService.sendMessage(message);
}



add(event: any) {
  console.log(event);
}
}
