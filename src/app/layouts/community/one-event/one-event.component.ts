import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-one-event',
  templateUrl: './one-event.component.html',
  styleUrls: ['./one-event.component.scss'],
})
export class OneEventComponent implements OnInit {
  @Input() event: any;
  interrested;
  dropDown: boolean;
  userid: any;
  friends: any;
  invite: any;
  selectedFriends: any;
  constructor(private elemRef: ElementRef,
    private followerService: FollowerService,
    private userservice: UserService) { }
  @HostListener('click', ['$event.target'])
  onClickOutside(targetElement) {
    const target = this.elemRef.nativeElement.querySelector('div');
    if (targetElement.tagName === target.tagName) {
      this.dropDown = false;
    }
  }
  ngOnInit() {
    this.dropDown = false;
    this.invite = false;
    this.getMe();
  }
  interest() {
    this.interrested = true;
  }
  notinterested() {
    this.interrested = false;
  }
  openDropDown() {
    if (this.dropDown === false) {
      this.dropDown = true;
    }
    else if (this.dropDown === true) {
      this.dropDown = false;
    }
  }
  getAllfriends() {
    this.invite = true;
    this.followerService.getFollowers(this.userid)
    .subscribe(res => {
      this.friends = res.data.data;
console.log( this.friends);
     } );
  }
  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.userid = res.data.data._id;
      console.log(this.userid);

    });
  }
}
