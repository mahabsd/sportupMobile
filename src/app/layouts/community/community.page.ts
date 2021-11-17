import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/Service/event.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  isScrollTop = false;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }
  doRefresh(event) {
   // this.posts = [];
    setTimeout(() => {
     // this.getAllPostsByEvent();
      event.target.complete();
    }, 1000);
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
