import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/shared/Service/event.service';
import { NotificationsService } from 'src/app/shared/Service/notifications.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

notification: notification = [
    { icon: "icon 1", message: "jon snow a demandé à s'abonner à votre compte", button: "birthday" },
    { icon: "icon 2", message: "jon snow a demandé à s'abonner à votre compte", button: "add" },
    { icon: "icon 3", message: "mbbbbbbbbbbb", button: "birthday" },
    { icon: "icon 4", message: "jon snow a demandé à s'abonner à votre compte", button: "image" },
    { icon: "icon 5", message: "cccccccccccc", button: "add" },
    { icon: "icon 6", message: "message 6", button: "add" },
    { icon: "icon 7", message: "message 7", button: "image" },
    { icon: "icon 7", message: "message 7", button: "image" },
    { icon: "icon 7", message: "message 7", button: "image" }

  ];
  isScrollTop: boolean;
  notif: any;
  user$: any;
  userid: any;
  notifications: any = [];
  notifLength: any;
  constructor(private eventService: EventService,
    public router: Router,
    private notificationsService: NotificationsService,
    private userservice: UserService,
    private socket: Socket,
  ) { }

  ngOnInit() {
    //this.getMe();
    this.notif = this.router.url.slice(19,);
    this.socket.connect();
    this.socket.emit('message', { msg: 'hey' });
    this.socket.fromEvent('message').subscribe( (res) => {
      this.getMe();
    });
  }
  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;

    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }
  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.user$ = res.data.data;
      this.userid = res.data.data._id;
      this.getNotifications();
    });
  }
  getNotifications() {
    this.notificationsService.getAllNotifications(this.userid).subscribe(res =>{
      this.notifications = res;
      this.notifLength =  this.notifications.length;
    });
  }

  resetNotifcations(notif) {
      notif.seen = true;
    this.notificationsService.updateNotification( notif).subscribe();

  }
}
type notification = Array<{ icon: string; message: string; button: string }>;
