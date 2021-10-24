import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/Shared/Service/user.service';
import { FollowerService } from 'src/app/Shared/Service/follower.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { EventService } from 'src/app/shared/Service/event.service';
import { ChatService } from 'src/app/shared/Service/chat.service';

@Component({
  selector: 'app-boite-reception',
  templateUrl: './boite-reception.page.html',
  styleUrls: ['./boite-reception.page.scss'],
})
export class BoiteReceptionPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  hideicon = false;
  selecteditemIndex;
  users = [];
  users2: any = [];
  page = 8; items = [];
  numTimesLeft = 5;
  userid = '60f983fb06d9b3846c3d1030';
  user$
  isScrollTop: boolean;
  recherche;
  constructor(private userservice: UserService,
    private followerService: FollowerService,
    private eventService: EventService,
    private chatService: ChatService
  ) {
    this.addMoreItems();
  }

  ngOnInit() {
    // this.getAllusers()
    this.getfollow();
    this.getMe();

  }
  logDrag(i) {
    let a = 0;
    a = a + 1;

    this.hideicon = true;
    this.selecteditemIndex = i;
    if (this.hideicon) {
    }
  }

  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.user$ = res.data.data;
    });
  }

  getAllusers() {
    this.userservice.getRoleUsers().subscribe((res) => {
      //console.log(res)
    });
  }


  getfollow(event?) {
    this.userservice.getMe().subscribe(
      (response) => {
        this.chatService.getAllChatsByuser(response.data.data.id).subscribe((res) => {
          this.users = res;
          if (event) {
            event.target.complete();
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );

  }

  loadData(event) {

    setTimeout(() => {
      console.log('Done');
      this.page = this.page * 2;
      this.getfollow();
      this.numTimesLeft -= 1;
      event.target.complete();
      this.users2 = [];

    }, 500);
  }

  addMoreItems() {
    for (let i = 0; i < 10; i++)
      this.items.push(i);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;

    } else {
      this.isScrollTop = true;
    }
    this.eventService.sendMessage(this.isScrollTop);

  }
  updateSeenMsgs(item) {
    item.seen = true;

    if (item.seenuser1.user1 === this.user$ )
    {
      item.seenuser1.lastVisit = Date();
    }
    else {
      item.seenuser1.lastVisit = Date();
    }

    this.chatService.updateChat(item._id, item).subscribe(res => console.log(res));
  }
}
