/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatKidsPage } from '../chat-kids/chat-kids.page';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-boite-reception',
  templateUrl: './boite-reception.page.html',
  styleUrls: ['./boite-reception.page.scss'],
})
export class BoiteReceptionPage implements OnInit {
  message = '';
  messages = [];
  currentUser;
  constructor( private modalController: ModalController,private socket: Socket,

    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.socket.connect();

    let name = ` User-${new Date().getTime()}`;

    this.currentUser = name;
    this.socket.emit('set-name', name);
    this.socket.fromEvent('users-changed').subscribe(data => {
      console.log('getdata', data);
      let user = data['user'];
      if (data['event'] == 'left') {
        this.presentToast(`User left:${user}`)
      } else {

        this.presentToast(`User joined:${user}`)
      }
    });
    this.socket.fromEvent('message').subscribe(message => {
      console.log('New:', message);
      this.messages.push(message);

    })
  }
  async click() {
    const modal = await this.modalController.create({
      component: ChatKidsPage,
      cssClass: 'my-custom-class',
      componentProps: {

      }
    });
    await modal.present();

    await modal.onWillDismiss().then((result) => {
     console.log("closed");


    });


  }

  
  sendMessage() {
    this.socket.emit('send-message', { text: this.message });
    this.message = '';
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
}