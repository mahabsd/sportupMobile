import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/Service/user.service';
@Component({
  selector: 'app-boite-reception',
  templateUrl: './boite-reception.page.html',
  styleUrls: ['./boite-reception.page.scss'],
})
export class BoiteReceptionPage implements OnInit {
hideicon=false;
selecteditemIndex;
users = [];

userid='60f983fb06d9b3846c3d1030';
  constructor( private userservice: UserService) { }

  ngOnInit() {
    this.getAllusers()
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
    this.userservice.getAllusers().subscribe((res) => {
      console.log(res);
      this.users=res
    });
  }

}
