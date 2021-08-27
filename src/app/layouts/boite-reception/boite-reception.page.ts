import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-boite-reception',
  templateUrl: './boite-reception.page.html',
  styleUrls: ['./boite-reception.page.scss'],
})
export class BoiteReceptionPage implements OnInit {
hideicon=false;
selecteditemIndex;
  constructor() { }

  ngOnInit() {
  }
  logDrag(i){
  let a=0;
  a=a+1;      console.log("thaelt"+a)

    this.hideicon=true;
    this.selecteditemIndex=i;
    if(this.hideicon){
     

    }


  }
}
