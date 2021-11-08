/* eslint-disable @typescript-eslint/dot-notation */
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Platform, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/Shared/Service/user.service';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/shared/Service/chat.service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild('fileInput', { static: false }) multiFileInput: ElementRef;
  @ViewChild('maindiv') list: any;
  apiImgUser = `${environment.apiImg}User/`;
  apiImgChat = `${environment.apiImg}chat/`;

  apiImg = `${environment.apiImg}Post/`;
  fileInput;
  message = '';
  messages = [];
  messages2 = [];
  IsimgSelected = 0;
  chatimg = [];
  userSenderId;
  currentUser;
  user$;
  username;
  userconnectedrole;
  idprofilePassed;
  filterchat: string;
  selectedFiles: any[];
  progressInfos: any[];
  selectedPreviews: any = [];
  constructor(private socket: Socket, private plt: Platform,
    private activatedRoute: ActivatedRoute,
    private userservice: UserService, private chatService: ChatService, private Renderer: Renderer2,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    //this.list.scrollToBottom(100);
    this.getchat();
    this.idprofilePassed = this.activatedRoute.snapshot.params.id;
    this.socket.connect();
    this.userservice.getMe().subscribe((res) => {
      this.user$ = res.data.data._id;
      this.username = res.data.data.name;
      this.userconnectedrole = res.data.data.role;
      this.currentUser = this.username;
      this.socket.emit('set-name', this.username);
      this.socket.fromEvent('users-changed').subscribe(data => {
        let user = data['user'];
        if (data['event'] === 'left') {
          this.presentToast(`${user} left the chat`);
        } else {
          if (user !== this.currentUser) {
            this.presentToast(`${user} joined the chat`);
          }
        }
      });
    });
    this.socket.fromEvent('message').subscribe(message => {
      this.getchat();
    });
  }
  sendMessage() {
    const formData = new FormData();
    if (this.selectedFiles != undefined) {
      for (const file of this.selectedFiles) {
        formData.append('file', file);
      }
      this.chatService.uploadImageFile(formData).subscribe((res) => {
        this.chatimg = res;
        this.socket.emit('send-message', { text: this.message, idsender: this.user$, idreceiver: this.idprofilePassed, images: this.chatimg });
        this.message = '';
        this.getchat();
        this.selectedFiles = [];
        this.selectedPreviews = [];
        this.IsimgSelected = 0;
      });
    }
    else {
      this.socket.emit('send-message', { text: this.message, idsender: this.user$, idreceiver: this.idprofilePassed, images: this.chatimg });
      this.message = '';
      this.getchat();
      this.selectedFiles = [];
      this.selectedPreviews = [];
      this.IsimgSelected = 0;
    }
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
  getchat() {
    this.userservice.getMe().subscribe((res) => {
      this.chatService.getChat(res.data.data._id, this.activatedRoute.snapshot.params.id).subscribe((res1) => {
        this.messages2 = res1;
      });
    });
  }

  choosefromphoto() {
    this.Renderer.setAttribute(this.multiFileInput.nativeElement, "accept", "image/jpg, image/jpeg, image/gif, image/png");
    this.multiFileInput.nativeElement.click();
  }

  getType(file) {
    return file.type;
  }

  selectFiles(event) {

    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.selectedPreviews = [];
    for (const file of this.selectedFiles) {

      if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/pdf' || file.type === 'image/gif') {
        const reader = new FileReader();
        reader.onload = e => this.selectedPreviews.push(reader.result);

        reader.readAsDataURL(file);
      }
      else if (file.type === "video/mp4") {
        this.selectedPreviews.push('../../../assets/imgs/video.jpg');

      }
      else if (file.type === "application/pdf") {
        this.selectedPreviews.push('../../../assets/imgs/video.jpg');

      }
      else if (file.type === "audio/mpeg" || file.type === " audio/ogg") {
        this.selectedPreviews.push('../../../assets/imgs/audio.png');
      }
    }
    this.IsimgSelected = this.selectedFiles.length;
  }

  getExt(fileName) {
    return fileName.substr(fileName.lastIndexOf('.') + 1);;
  }



}




