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
import { AddStatusKidsPage } from 'src/app/layouts/kids/accueil/status-kids/add-status-kids/add-status-kids.page';
import { ChatService } from 'src/app/shared/Service/chat.service';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-tabs-kids',
  templateUrl: './tabs-kids.page.html',
  styleUrls: ['./tabs-kids.page.scss'],
})
export class TabsKidsPage implements OnInit {
  user$: any = [];
  menuOpened = false;
  userid
  subscription: Subscription;
  pagetype: string;
   urlpage = this.router.url.split('/', 6);
  notseenMessagesNumber: number;

  constructor(
    private imageService: ImageService,
    private modalController: ModalController,
    private router: Router,
    private userservice: UserService,
    private eventService: EventService,
    private chatService: ChatService,
    private socket: Socket
  ) { }

  ngOnInit() {
    this.getMe();
    this.subscription = this.eventService.getMessage().subscribe((message) => {
      this.menuOpened = message.event;
    });
    this.socket.connect();
    this.socket.emit('message', { msg: 'hey' });
    this.socket.fromEvent('message').subscribe( (res) => {
      this.getMe();
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
    this.openShareModal("accueil");

  }


  async openShareModal(type) {
    const modal = await this.modalController.create({
      component: AddStatusKidsPage,
      componentProps: {
        user: this.user$,
       // pagetype:type
      },
    });
    await modal.present();
    await modal.onWillDismiss().then((result) => {
  });

  }




  sendMessage(message) {
    // send message to subscribers via observable subject
    this.imageService.sendMessage(message);
  }



  add(event: any) {
    console.log(event);
  }
  getNumberNonreadChats() {
    this.notseenMessagesNumber  = 0;
    this.chatService.getAllChatsByuser(this.userid).subscribe(res => {
      res.map(msg => {
        if (msg.messages[msg.messages.length - 1].userSender !== this.userid) {
          if (msg.seenuser1.user1 === this.userid) {
            if (msg.seenuser1.lastVisit < msg.messages[msg.messages.length - 1].createdDate) {
              this.notseenMessagesNumber = this.notseenMessagesNumber + 1;
            }
          } else if (msg.seenuser2.user2 === this.userid) {
            if (msg.seenuser2.lastVisit < msg.messages[msg.messages.length - 1].createdDate) {
              this.notseenMessagesNumber = this.notseenMessagesNumber + 1;
            }
          }
        }
      });
    });
  }
}

