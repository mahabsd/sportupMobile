import { Component, OnInit,ViewChild  } from '@angular/core';
import { UserService } from 'src/app/Shared/Service/user.service';
import { FollowerService } from 'src/app/Shared/Service/follower.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-boite-reception',
  templateUrl: './boite-reception.page.html',
  styleUrls: ['./boite-reception.page.scss'],
})
export class BoiteReceptionPage implements OnInit {
hideicon=false;
selecteditemIndex;
users = [];
page=8;  items = [];
numTimesLeft = 5;
@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

userid='60f983fb06d9b3846c3d1030';
  constructor( private userservice: UserService,private followerService:FollowerService) {    this.addMoreItems();
  }

  ngOnInit() {
   // this.getAllusers()
    this.getfollow();
  }
  logDrag(i){
  let a=0;
  a=a+1;      

    this.hideicon=true;
    this.selecteditemIndex=i;
    if(this.hideicon){
     

    }


  }

  
  getAllusers() {
    this.userservice.getRoleUsers().subscribe((res) => {
     //console.log(res)
    });
  }


  getfollow(event?){
    this.userservice.getMe().subscribe(
      (response) => {
        this.followerService.getFollowForFriends( response.data.data.id,this.page).subscribe((res) => {
          this.users=res
        if(event){
          event.target.complete()
        }
      console.log(res)
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
      this.page=this.page*2
      this.getfollow();
      this.numTimesLeft -= 1;
      event.target.complete();
    }, 2000);
  }

  addMoreItems() {
    for (let i=0; i<10; i++)
      this.items.push(i);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
