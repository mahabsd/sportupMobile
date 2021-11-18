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
  private: boolean;
  public: boolean;
  constructor() { }

  ngOnInit() {
    this.private = false;
    this.public = true;
    this.selected = 'Page';
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
