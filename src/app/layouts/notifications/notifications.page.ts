import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: notification = [
      { icon: "icon 1", message: "jon snow a demandé à s'abonner à votre compte", button:"birthday" },
      { icon: "icon 2", message: "jon snow a demandé à s'abonner à votre compte", button:"add"  },
      { icon: "icon 3", message: "mbbbbbbbbbbb", button:"birthday"  },
      { icon: "icon 4", message: "jon snow a demandé à s'abonner à votre compte", button:"image"  },
      { icon: "icon 5", message: "cccccccccccc", button:"add"  },
      { icon: "icon 6", message: "message 6", button:"add"  },
      { icon: "icon 7", message: "message 7", button:"image"  }      
    ];

  constructor() {
  }

  ngOnInit() {
  }
}
type notification = Array<{ icon: string; message: string,button:string }>;
