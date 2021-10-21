import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/shared/Service/event.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: notification = [
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

  constructor(private eventService: EventService, public router: Router
  ) {
  }

  ngOnInit() {
    this.notif =this.router.url.slice(19, );
    console.log(this.notif);
    }
  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;

    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }
}
type notification = Array<{ icon: string; message: string, button: string }>;
