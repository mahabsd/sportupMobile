import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/Service/user.service';

@Component({
  selector: 'app-recherche-friends',
  templateUrl: './recherche-friends.page.html',
  styleUrls: ['./recherche-friends.page.scss'],
})
export class RechercheFriendsPage implements OnInit {
  users = [];
  hideicon=false;
selecteditemIndex;
  constructor(private userservice: UserService) { }

  ngOnInit() {
        this.getAllusers()

  }




  
  getAllusers() {
    this.userservice.getRoleUsers().subscribe((res) => {
      this.users=res.data
     console.log(res)
    });
  }

  logDrag(i){
    let a=0;
    a=a+1;      
  
      this.hideicon=true;
      this.selecteditemIndex=i;
      if(this.hideicon){
       
  
      }
  
  
    }
}
