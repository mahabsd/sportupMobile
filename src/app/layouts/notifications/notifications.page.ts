import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/shared/Service/event.service';
import { NotificationsService } from 'src/app/shared/Service/notifications.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../../environments/environment';
import { forkJoin } from 'rxjs';
import { CommentService } from '../../Shared/Service/comment.service';
import { PostService } from '../../shared/Service/post.service';
import {NotificationComponent} from "./notification/notification.component"

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})

export class NotificationsPage implements OnInit {
  @Input() post: any;
  apiImgUser = `${environment.apiImg}User/`;
  isScrollTop: boolean;
  notif: any;
  user$: any;
  userid: any;
  notifications: any = [];
  notifLength: any;
  comments: any = [];
  images: any = [];
  mediafiles: any = [];
  constructor(private eventService: EventService,
    private postService: PostService,
    private commentService: CommentService,
    public router: Router,
    private notificationsService: NotificationsService,
    private userservice: UserService,
    private socket: Socket,
  ) { }

  ngOnInit() {
    this.getMe();
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
      this.notifLength = this.notifications.length;
    });
  }

  resetNotifcations(notif) {
      notif.seen = true;
    this.notificationsService.updateNotification(notif).subscribe();

  }
}
type notification = Array<{ icon: string; message: string; button: string }>;
