import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/Service/event.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  isScrollTop = false;
  selected: any;
  events = [
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day:"Mardi"
    },
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day:"Mardi"
    },
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day:"Mardi"
    },
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day:"Mardi"
    },
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day:"Mardi"
    },
    {
      name: "ZUMBA BEACH",
      participants: 300,
      date: "23/08/2021",
      time: "18:00",
      day:"Mardi"
    }

  ]
  constructor(private eventService: EventService) { }

  segmentChanged(ev: any) {
    this.selected = ev.detail.value;
  }
  ngOnInit() {
    this.selected = 'Pages';
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
