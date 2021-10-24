/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/Shared/Service/user.service';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/shared/Service/chat.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  apiImgUser = `${environment.apiImg}User/`;
  apiImg = `${environment.apiImg}Post/`;
  message = '';
  messages = [];
  messages2 = [];
  userSenderId;
  currentUser;
  user$;
  username;
  idprofilePassed;
  filterchat:string;
  constructor(private socket: Socket,
    private activatedRoute: ActivatedRoute,
    private userservice: UserService, private chatService: ChatService,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  
    this.getchat();
    this.idprofilePassed= this.activatedRoute.snapshot.params.id
    this.socket.connect();
    this.userservice.getMe().subscribe((res) => {
      this.user$ = res.data.data._id;
      this.username=res.data.data.name
      console.log(this.user$);
  
    let name = ` User-${new Date().getTime()}`;

    this.currentUser =  this.username;
    this.socket.emit('set-name',  this.username);
    this.socket.fromEvent('users-changed').subscribe(data => {
      console.log('getdata', data);
      let user = data['user'];
      if (data['event'] === 'left') {
        this.presentToast(`${user} left the chat`);
      } else {
          if(user!== this.currentUser){
            this.presentToast(`${user} joined the chat`);}
      }
    });
  });
    this.socket.fromEvent('message').subscribe(message => {
      console.log('New:', message);
      this.getchat();
    });
  }
  sendMessage() {
    this.socket.emit('send-message', { text: this.message,idsender: this.user$,idreceiver:this.idprofilePassed});
    this.message = '';
    this.getchat();
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }
  async presentToast(message) {
    const myToast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'success',
      position: 'top'
    }).then((toastData) => {
      toastData.present();
    });
  }



  getchat(){


    this.userservice.getMe().subscribe((res) => {

      this.chatService.getChat( res.data.data._id,this.activatedRoute.snapshot.params.id).subscribe((res1) => {
      console.log(res1);
      this.messages2=res1;
     // this.updateSeenMsgs(res1, sender);

      });


    });

  }
  updateSeenMsgs(item, sender){
    item.seen = false;
    console.log(sender);
    this.chatService.updateChat(item._id, item).subscribe(res=> console.log(res));
      }
}




