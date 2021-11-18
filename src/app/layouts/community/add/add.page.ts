import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  evennement: any = false;
  page: any = false;
  selected: any;
  conf=false;
  dropDown=false;
  constructor() { }

  ngOnInit() {
    this.selected = 'Page';
  }

   toggleConf() {
    if(this.conf===false){
      this.conf=true;
    }
    else if (this.conf===true){
      this.conf=false;
    }
  }

  openDropDown(){
    if(this.dropDown===false){
      this.dropDown=true;
    }
    else if(this.dropDown===true){
      this.dropDown=false;
    }
  }


  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.selected = ev.detail.value;
  }

}
